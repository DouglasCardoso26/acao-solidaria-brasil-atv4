
/* ===== A11Y SCRIPT ===== */
(function(){
  const root = document.documentElement;
  const kEscuro = 'pref_modo_escuro';
  const kContraste = 'pref_alto_contraste';

  function applyPrefs(){
    const esc = localStorage.getItem(kEscuro) === '1';
    const alt = localStorage.getItem(kContraste) === '1';
    root.classList.toggle('modo-escuro', esc);
    root.classList.toggle('alto-contraste', alt);
    const be = document.getElementById('btn-escuro');
    const bc = document.getElementById('btn-contraste');
    if (be) be.setAttribute('aria-pressed', String(esc));
    if (bc) bc.setAttribute('aria-pressed', String(alt));
  }

  document.addEventListener('click', (e)=>{
    if (e.target && e.target.id === 'btn-escuro') {
      const v = localStorage.getItem(kEscuro) === '1';
      localStorage.setItem(kEscuro, v ? '0' : '1');
      applyPrefs();
    }
    if (e.target && e.target.id === 'btn-contraste') {
      const v = localStorage.getItem(kContraste) === '1';
      localStorage.setItem(kContraste, v ? '0' : '1');
      applyPrefs();
    }
  });

  // Close open menus on ESC (if they follow [data-menu][aria-expanded])
  document.addEventListener('keydown', (e)=>{
    if (e.key === 'Escape') {
      const open = document.querySelector('[data-menu][aria-expanded="true"]');
      if (open) {
        open.setAttribute('aria-expanded', 'false');
        open.blur();
      }
    }
  });

  // Force focus on main when skip link used
  document.querySelectorAll('a.skip-link').forEach(a=>{
    a.addEventListener('click', ()=> {
      const main = document.getElementById('conteudo');
      if (main) main.focus();
    });
  });

  applyPrefs();
})();
