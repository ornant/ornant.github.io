// Two-source wave interference, computed per pixel on the GPU. One source follows the pointer.
export const context = 'webgl2';
export const params = { wavelength: [10, 60, 26, 1] };

export const shader = `#version 300 es
  precision highp float;
  uniform vec2 a, b;           // the two sources, in pixels
  uniform float k, phase;      // wavenumber (2π / wavelength) and how far the waves have travelled
  uniform vec3 dark, glow, ink;
  out vec4 color;
  void main() {
    vec2 p = gl_FragCoord.xy;
    float h = sin(k * distance(p, a) - phase)
            + sin(k * distance(p, b) - phase);
    float i = h * h / 4.0;  // brightness, 0 to 1
    vec3 c = mix(dark, glow, smoothstep(0.05, 0.65, i));
    color = vec4(mix(c, ink, smoothstep(0.8, 1.0, i)), 1.0);
  }`;

export default function ({ canvas, fragment, rgb, colors, width, height }) {
  const render = fragment(shader);
  const dark = rgb(colors.dark), glow = rgb(colors.glow), ink = rgb(colors.ink);
  let bx = width * 0.68, by = height * 0.5, phase = 0;
  return ({ width, height, t, dt, pointer, params }) => {
    const s = canvas.width / width, f = 1 - Math.exp(-dt * 4);
    bx += ((pointer.inside ? pointer.x : width * (0.68 + 0.06 * Math.sin(t * 0.4))) - bx) * f;
    by += ((pointer.inside ? pointer.y : height * 0.5) - by) * f;
    phase += dt * 3;
    render({
      k: (2 * Math.PI) / (params.wavelength * s), phase,
      a: [width * 0.32 * s, height * 0.5 * s], b: [bx * s, (height - by) * s],
      dark, glow, ink,
    });
  };
}
