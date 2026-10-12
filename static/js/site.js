// Shared: crisp grain, Helsinki clock, post count, WRITING title, full-width ONWARD fit.
(function(){
  const g = document.getElementById('grain');
  if (g) g.style.backgroundSize = (512 / (window.devicePixelRatio || 1)) + 'px';
  const tEl = document.getElementById('hki-time');
  if (tEl) {
    const tf = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Helsinki', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
    const tick = () => { tEl.textContent = tf.format(new Date()); };
    tick(); setInterval(tick, 1000);
  }
  const count = document.getElementById('count');
  if (count) count.textContent = String(document.querySelectorAll('.post').length).padStart(2, '0');
  const meas = document.createElement('span');
  meas.style.cssText = 'position:absolute;left:-99999px;visibility:hidden;white-space:nowrap;font-weight:800;font-size:100px;letter-spacing:.02em;font-family:"Inter Tight",system-ui,sans-serif';
  document.body.appendChild(meas);
  const els = [...document.querySelectorAll('[data-fit]')];
  els.forEach(el => {
    const t = el.dataset.fit, row = document.createElement('div');
    row.setAttribute('aria-label', t);
    [...t].forEach(c => { const s = document.createElement('span'); s.textContent = c; s.setAttribute('aria-hidden', 'true'); row.appendChild(s); });
    el.appendChild(row);
  });
  function fit(){
    const t = document.getElementById('title');
    if (t) {
      const tfs = 60 * Math.min(1, t.parentElement.clientWidth / 764), cut = Math.max(.75, tfs * .015), ls = 0.01314 * innerWidth - 0.041 * tfs;
      t.style.fontSize = tfs + 'px';
      t.style.height = (tfs * .727 - 2 * cut) + 'px';
      t.style.letterSpacing = ls + 'px';
      t.style.marginRight = '0px';
      [...t.children].forEach((s, i) => { s.style.marginTop = (-0.137 * tfs - cut) + 'px'; if (i === 0) s.style.marginLeft = (-0.026 * tfs) + 'px'; else s.style.marginRight = (-ls - 0.026 * tfs) + 'px'; });
    }
    els.forEach(el => {
      meas.textContent = el.dataset.fit;
      const fs = 100 * el.clientWidth / meas.getBoundingClientRect().width;
      const row = el.firstChild;
      el.style.fontSize = fs + 'px';
      el.style.height = (fs * 0.727) + 'px';
      row.style.marginTop = (-0.137 * fs) + 'px';
      row.style.marginLeft = row.style.marginRight = (-0.026 * fs) + 'px';
    });
  }
  fit();
  document.fonts && document.fonts.ready.then(fit);
  addEventListener('resize', fit);
  addEventListener('load', fit);
  new ResizeObserver(fit).observe(document.documentElement);
})();
