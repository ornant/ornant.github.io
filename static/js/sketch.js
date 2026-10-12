// Runs the canvas sketches in posts. In Markdown: {{< sketch src="ripples.js" >}},
// with ripples.js in the post's folder. A sketch module looks like:
//
//   export const params = { speed: [0, 5, 2], glow: true };  // optional: sliders [min, max, value, step?] and toggles
//   export default function setup({ ctx, width, height, colors, params }) {
//     return ({ ctx, width, height, t, dt, frame, pointer, params, colors }) => {
//       // draw one frame; t and dt in seconds, sizes in CSS pixels
//     };
//   }
//
// Optional exports: `context = 'webgl2'` for a GPU canvas (setup then also gets `fragment`, a
// full-screen shader helper, and `rgb`, which turns '#9b7861' into [r, g, b]), and
// `still = true` for diagrams that only redraw when something changes.
// The loop only runs while the sketch is on screen; visitors who prefer reduced motion get a
// single frame. The canvas stays sharp on Retina and when pinch-zoomed, and text drawn on it
// waits for the page fonts.
const colors = { bg: '#413734', ink: '#f5f5f4', dark: '#2e2624', mid: '#6e5a50', glow: '#9b7861' };
const rgb = hex => [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16) / 255);
const reduced = matchMedia('(prefers-reduced-motion: reduce)');

document.querySelectorAll('canvas[data-sketch]').forEach(run);

async function run(canvas) {
  let mod;
  try { [mod] = await Promise.all([import(canvas.dataset.sketch), document.fonts.ready]); }
  catch (e) { console.error('sketch', canvas.dataset.sketch, e); return; }
  const gl = mod.context === 'webgl2';
  const ctx = canvas.getContext(gl ? 'webgl2' : '2d');
  if (!ctx) { console.error('sketch: this browser has no', mod.context); return; }
  const still = mod.still === true;
  const pointer = { x: 0, y: 0, inside: false, down: false };
  const start = performance.now();
  let width = 0, height = 0, draw, visible = false, raf = 0, last = start, frame = 0;

  const size = () => {
    const r = canvas.getBoundingClientRect();
    const dpr = Math.min(4, (devicePixelRatio || 1) * (window.visualViewport?.scale || 1));
    const w = Math.round(r.width * dpr), h = Math.round(r.height * dpr);
    width = r.width; height = r.height;
    if (canvas.width === w && canvas.height === h) return;
    canvas.width = w; canvas.height = h;
    if (gl) ctx.viewport(0, 0, w, h); else ctx.setTransform(w / r.width, 0, 0, h / r.height, 0, 0);
  };
  const loop = now => {
    raf = 0;
    draw({ ctx, width, height, t: (now - start) / 1000, dt: Math.min(0.1, (now - last) / 1000), frame: frame++, pointer, params, colors });
    last = now;
    if (visible && !still && !reduced.matches) raf = requestAnimationFrame(loop);
  };
  const wake = () => { if (!raf && draw) raf = requestAnimationFrame(loop); };
  const params = controls(canvas, mod.params, wake);

  size();
  try { draw = mod.default({ canvas, ctx, width, height, colors, rgb, params, fragment: gl ? src => fragment(ctx, src) : undefined }); }
  catch (e) { console.error('sketch', canvas.dataset.sketch, e); return; }
  if (typeof draw !== 'function') return;

  new ResizeObserver(() => { size(); wake(); }).observe(canvas);
  window.visualViewport?.addEventListener('resize', () => { size(); wake(); });
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible) wake(); }).observe(canvas);
  const at = e => {
    const r = canvas.getBoundingClientRect();
    pointer.x = e.clientX - r.left; pointer.y = e.clientY - r.top; pointer.inside = true;
    wake();
  };
  // Mouse: follow it. Touch: a tap or a sideways drag moves the pointer and it stays there;
  // vertical swipes scroll the page (touch-action: pan-y) and leave the sketch alone.
  const touch = e => e.pointerType === 'touch';
  let from = null; // where the current touch began
  canvas.addEventListener('pointerdown', e => { pointer.down = true; if (touch(e)) from = [e.clientX, e.clientY]; else at(e); });
  canvas.addEventListener('pointermove', e => {
    if (!touch(e)) at(e);
    else if (from && Math.abs(e.clientX - from[0]) > Math.abs(e.clientY - from[1])) at(e); // sideways only
  });
  canvas.addEventListener('pointerup', e => { if (touch(e) && from) at(e); from = null; });
  addEventListener('pointerup', () => { pointer.down = false; });
  canvas.addEventListener('pointercancel', () => { pointer.down = false; from = null; });
  canvas.addEventListener('pointerleave', e => { if (!touch(e)) pointer.inside = false; pointer.down = false; wake(); });
  reduced.addEventListener('change', wake);
  wake();
}

// Sliders and toggles under the canvas, from `export const params`. Returns the live values.
function controls(canvas, spec, onChange) {
  const values = {};
  if (!spec) return values;
  const box = document.createElement('div');
  box.className = 'controls';
  for (const [name, def] of Object.entries(spec)) {
    const label = document.createElement('label'), input = document.createElement('input');
    label.append(name.replace(/_/g, ' '), input);
    if (typeof def === 'boolean') {
      input.type = 'checkbox';
      input.checked = values[name] = def;
      input.oninput = () => { values[name] = input.checked; onChange(); };
    } else {
      const [min, max, value, step = 'any'] = def, out = document.createElement('output');
      Object.assign(input, { type: 'range', min, max, step, value });
      values[name] = +input.value;
      const show = () => { out.value = +(+input.value).toFixed(2); };
      input.oninput = () => { values[name] = +input.value; show(); onChange(); };
      show();
      label.append(out);
    }
    box.append(label);
  }
  canvas.after(box);
  return values;
}

// WebGL2: compiles a full-screen fragment shader and returns render(uniforms).
// u_resolution (drawing size in pixels) is set for you; other uniforms are floats or 2-4 number arrays.
function fragment(gl, source) {
  const compile = (type, src) => {
    const s = gl.createShader(type);
    gl.shaderSource(s, src); gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s));
    return s;
  };
  const program = gl.createProgram();
  gl.attachShader(program, compile(gl.VERTEX_SHADER, '#version 300 es\nvoid main(){vec2 p=vec2((gl_VertexID<<1)&2,gl_VertexID&2);gl_Position=vec4(p*2.-1.,0,1);}'));
  gl.attachShader(program, compile(gl.FRAGMENT_SHADER, source.trim()));
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(program));
  const loc = {}, set = [, gl.uniform1f, gl.uniform2fv, gl.uniform3fv, gl.uniform4fv];
  return (uniforms = {}) => {
    gl.useProgram(program);
    for (const [k, v] of Object.entries({ u_resolution: [gl.drawingBufferWidth, gl.drawingBufferHeight], ...uniforms })) {
      if (!(k in loc)) loc[k] = gl.getUniformLocation(program, k);
      if (loc[k]) set[typeof v === 'number' ? 1 : v.length].call(gl, loc[k], v);
    }
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  };
}
