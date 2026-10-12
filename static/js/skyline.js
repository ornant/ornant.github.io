(function(){
function helsinkiGeo() {
  const B = 500, S = {}, Dt = {};
  let g = "oodi";
  const p = { push: s => (S[g] = S[g] || []).push(s) };
  const d = { push: s => (Dt[g] = Dt[g] || []).push(s) };
  let ox = 0;
  const X = x => +(x + ox).toFixed(1);
  const R = (x, t, w, b = B) => p.push(`M${X(x)} ${b}V${t}H${X(x + w)}V${b}Z`);
  const D = (cx, y, rx, ry = rx) => p.push(`M${X(cx - rx)} ${y}A${rx} ${ry} 0 0 1 ${X(cx + rx)} ${y}Z`);
  const T = (x, w, t, b = B) => p.push(`M${X(x)} ${b}L${X(x + w / 2)} ${t}L${X(x + w)} ${b}Z`);
  const On = (cx, b, w, h) => p.push(`M${X(cx - w)} ${b}C${X(cx - w * 1.35)} ${b - h * .55} ${X(cx - w * .15)} ${b - h * .78} ${X(cx)} ${b - h}C${X(cx + w * .15)} ${b - h * .78} ${X(cx + w * 1.35)} ${b - h * .55} ${X(cx + w)} ${b}Z`);
  const P = pts => p.push('M' + pts.map(([x, y]) => `${X(x)} ${y}`).join('L') + 'Z');
  const L = (x1, y1, x2, y2) => d.push(`M${X(x1)} ${+y1.toFixed(1)}L${X(x2)} ${+y2.toFixed(1)}`);
  const C = (cx, cy, r) => d.push(`M${X(cx - r)} ${cy}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0`);
  const Q = (x, y, w, hh) => d.push(`M${X(x)} ${y}h${w}v${hh}h${-w}Z`);
  const W = 1800, M = 30, ext = [[0, 340], [820, 1180], [1215, 1345], [1425, 1665], [1522, 1678], [0, 326]];
  const G = (W - 2 * M - ext.reduce((s, [a, b]) => s + b - a, 0)) / (ext.length - 1);
  let cur = M; const O = ext.map(([a, b]) => { const o = cur - a; cur += b - a + G; return o; });
  ox = O[0]; g = "oodi";
  p.push(`M${X(0)} ${B}V392L${X(340)} 400V412Q${X(272)} 418 ${X(244)} 466L${X(238)} ${B}Z`);
  L(0, 412, 340, 412);
  for (let x = 12; x < 338; x += 16) L(x, 392 + 8 * x / 340 + 5, x, 408);
  d.push(`M${X(0)} 448Q${X(120)} 470 ${X(244)} 466`);
  for (let x = 14; x < 232; x += 18) { const t = x / 244, y = (1 - t) ** 2 * 448 + 2 * (1 - t) * t * 470 + t * t * 466; L(x, y + 5, x, 498); }
  for (let k = 1; k <= 3; k++) d.push(`M${X(340 - k * 28)} 412Q${X(272 - k * 22)} ${418 + k * 2} ${X(244 - k * 16)} ${466 - k}`);
  ox = O[1]; g = "cathedral";
  P([[820, B], [856, 470], [1144, 470], [1180, B]]);
  R(880, 400, 240); R(874, 394, 252, 404); T(940, 120, 362, 396);
  R(948, 300, 104); R(942, 290, 116, 302); D(1000, 292, 54, 58);
  R(989, 200, 22, 236); D(1000, 202, 12, 11); R(998, 162, 4, 192); R(991, 172, 18, 176);
  for (const x of [902, 1098]) { R(x - 13, 342, 26, 396); D(x, 344, 16, 19); R(x - 4, 312, 8, 327); D(x, 313, 5, 5); R(x - 1, 296, 2, 309); }
  for (const x of [948, 969, 990, 1010, 1031, 1052]) L(x, 400, x, 468);
  for (let x = 956; x <= 1044; x += 11) L(x, 306, x, 340);
  ox = O[2]; g = "stjohn";
  R(1215, 410, 130); T(1215, 130, 378, 412);
  R(1228, 300, 30); R(1302, 300, 30); T(1226, 34, 165, 302); T(1300, 34, 165, 302);
  for (const x of [1224, 1252, 1298, 1326]) T(x, 8, 286, 302);
  C(1280, 396, 10); L(1243, 318, 1243, 344); L(1317, 318, 1317, 344);
  ox = O[3]; g = "uspenski";
  D(1545, B, 120, 32);
  R(1480, 392, 130, 500); T(1480, 65, 360, 394); T(1545, 65, 360, 394);
  R(1528, 300, 34, 395); On(1545, 302, 21, 52); R(1543, 222, 4, 252); R(1537, 232, 16, 236);
  for (const x of [1496, 1596]) { R(x - 10, 345, 20, 395); On(x, 347, 12, 28); R(x - 1, 302, 2, 321); }
  R(1618, 330, 24); R(1614, 326, 32, 334); On(1630, 327, 9, 22); R(1629, 290, 2, 307);
  for (const x of [1500, 1520, 1570, 1590]) L(x, 420, x, 458);
  ox = 0; g = "wheel";
  const cx = +(1600 + O[4]).toFixed(1), cy = 405, r = 78;
  R(cx - 60, 484, 120);
  let sp = '', gd = '';
  for (let i = 0; i < 18; i++) {
    const an = i / 18 * Math.PI * 2, x = +(cx + Math.cos(an) * r).toFixed(1), y = +(cy + Math.sin(an) * r).toFixed(1);
    sp += `M${cx} ${cy}L${x} ${y}`;
    gd += `M${(x - 3.5).toFixed(1)} ${(y + 4).toFixed(1)}a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0`;
  }
  const wheel = `M${cx - r} ${cy}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0M${cx - 34} ${B}L${cx} ${cy}L${cx + 34} ${B}`;
  ox = O[5]; g = "kalasatama";
  R(0, 290, 62); Q(10, 300, 16, 14); Q(36, 300, 16, 14);
  P([[78, B], [78, 248], [92, 248], [92, 228], [144, 228], [144, B]]);
  P([[160, B], [160, 196], [153, 152], [237, 152], [230, 196], [230, B]]);
  L(160, 196, 230, 196); L(170, 190, 165, 160); L(184, 190, 182, 160); L(206, 190, 208, 160); L(220, 190, 225, 160);
  P([[248, B], [248, 242], [242, 208], [326, 208], [320, 242], [320, B]]);
  L(248, 242, 320, 242); L(258, 236, 254, 214); L(275, 236, 274, 214); L(293, 236, 294, 214); L(310, 236, 314, 214);
  for (const [x0, x1, y0] of [[0, 62, 324], [78, 144, 262], [160, 230, 208], [248, 320, 254]]) {
    const m = (x0 + x1) / 2;
    for (let y = y0; y < 490; y += 10) { L(x0 + 7, y, m - 3, y); L(m + 3, y, x1 - 7, y); }
  }
  const order = ["oodi", "cathedral", "stjohn", "uspenski", "wheel", "kalasatama"];
  return { order, S, Dt, all: order.map(k => (S[k] || []).join('')).join(''), spokes: sp, gondolas: gd, wheel, wheelHit: `M${cx - r} ${cy}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0` };
}
const NAMES = { oodi: "Oodi Library", cathedral: "Helsinki Cathedral", stjohn: "St. John's Church", uspenski: "Uspenski Cathedral", wheel: "SkyWheel Helsinki", kalasatama: "Kalasatama Towers" };
const COORDS = "60.1699° N · 24.9384° E";
const host = document.getElementById('sky');
if (!host) return;
const H = helsinkiGeo(), ns = 'vector-effect="non-scaling-stroke"';
let s = `<svg viewBox="0 140 1800 360" preserveAspectRatio="xMidYMax slice"><defs><mask id="hk-out" maskUnits="userSpaceOnUse" x="0" y="0" width="1800" height="1000"><rect x="0" y="0" width="1800" height="1000" fill="#fff"></rect><path d="${H.all}" fill="#000"></path></mask></defs><g fill="none" stroke="#f5f5f4" stroke-opacity=".88" stroke-linejoin="round" stroke-linecap="round">`;
for (const k of H.order) {
  const sky = (H.S[k] || []).join(''), det = (H.Dt[k] || []).join('');
  s += `<g class="b" data-k="${k}"><path d="${k === 'wheel' ? sky + H.wheelHit : sky}" fill="none" stroke="none" pointer-events="all"></path><path d="${sky}" stroke-width="3" ${ns} mask="url(#hk-out)"></path>`;
  if (det) s += `<path d="${det}" stroke-width="1" ${ns} opacity=".28"></path>`;
  if (k === 'wheel') s += `<path d="${H.wheel}" stroke-width="1.5" ${ns}></path><path d="${H.spokes}" stroke-width="1" ${ns} opacity=".3"></path><path d="${H.gondolas}" stroke-width="1.2" ${ns}></path>`;
  s += `</g>`;
}
s += `</g></svg>`;
host.insertAdjacentHTML('afterbegin', s);
const label = document.getElementById('sky-label');
const setLabel = t => { const n = label.cloneNode(); n.textContent = t; label.replaceWith(n); window.__skyLabel = n; };
let cur = label;
const swap = t => { const n = cur.cloneNode(); n.textContent = t; cur.replaceWith(n); cur = n; };
host.querySelectorAll('.b').forEach(b => {
  b.addEventListener('mouseenter', () => { host.classList.add('h'); b.classList.add('on'); swap(NAMES[b.dataset.k]); });
  b.addEventListener('mouseleave', () => { host.classList.remove('h'); b.classList.remove('on'); swap(COORDS); });
});
})();
