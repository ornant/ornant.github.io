// Ripples: a dot grid lit by waves spreading from the pointer (or the center when idle).
export const params = { wavelength: [8, 40, 22, 1], speed: [0, 6, 2.2], glow: true };

export default function ({ width, height }) {
  let ox = width / 2, oy = height / 2, phase = 0;
  return ({ ctx, width, height, dt, pointer, params, colors }) => {
    const k = 1 - Math.exp(-dt * 5);
    ox += ((pointer.inside ? pointer.x : width / 2) - ox) * k;
    oy += ((pointer.inside ? pointer.y : height / 2) - oy) * k;
    phase += dt * params.speed;
    ctx.clearRect(0, 0, width, height);
    const gap = 14;
    for (let y = gap / 2; y < height; y += gap) {
      for (let x = gap / 2; x < width; x += gap) {
        const d = Math.hypot(x - ox, y - oy);
        const w = Math.max(0, Math.sin(d / params.wavelength - phase)) * Math.exp(-d / 380);
        ctx.globalAlpha = 0.26 + 0.74 * w;
        ctx.fillStyle = params.glow && w > 0.3 ? colors.glow : colors.ink;
        ctx.beginPath();
        ctx.arc(x, y, 1.1 + 1.9 * w, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    ctx.globalAlpha = 1;
  };
}
