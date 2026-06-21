/* case.js — theme toggle shared across case-study pages (mirrors index.html) */
(function(){
  const html = document.documentElement;
  const btn  = document.getElementById('theme-toggle');
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') { html.removeAttribute('data-theme'); if (btn) btn.textContent = '☀︎'; }
  if (!btn) return;
  btn.addEventListener('click', () => {
    const isLight = html.getAttribute('data-theme') === 'light';
    if (isLight) {
      html.removeAttribute('data-theme');
      btn.textContent = '☀︎';
      localStorage.setItem('theme','dark');
    } else {
      html.setAttribute('data-theme','light');
      btn.textContent = '🌙';
      localStorage.setItem('theme','light');
    }
  });
})();
