// ===== A11Y: Modo escuro + Alto contraste =====
(function () {
  const root = document.documentElement;
  const KEY_DARK = "pref_modo_escuro";
  const KEY_CONTRASTE = "pref_alto_contraste";

  const btnEscuro = document.getElementById("btn-escuro");
  const btnContraste = document.getElementById("btn-contraste");

  function aplicarPreferencias() {
    const escuroAtivo = localStorage.getItem(KEY_DARK) === "1";
    const contrasteAtivo = localStorage.getItem(KEY_CONTRASTE) === "1";

    root.classList.toggle("modo-escuro", escuroAtivo);
    root.classList.toggle("alto-contraste", contrasteAtivo);

    if (btnEscuro) {
      btnEscuro.setAttribute("aria-pressed", String(escuroAtivo));
    }
    if (btnContraste) {
      btnContraste.setAttribute("aria-pressed", String(contrasteAtivo));
    }
  }

  if (btnEscuro) {
    btnEscuro.addEventListener("click", function () {
      const atual = localStorage.getItem(KEY_DARK) === "1";
      localStorage.setItem(KEY_DARK, atual ? "0" : "1");
      aplicarPreferencias();
    });
  }

  if (btnContraste) {
    btnContraste.addEventListener("click", function () {
      const atual = localStorage.getItem(KEY_CONTRASTE) === "1";
      localStorage.setItem(KEY_CONTRASTE, atual ? "0" : "1");
      aplicarPreferencias();
    });
  }

  // Skip-link: foca no main ao pular conteúdo
  document.querySelectorAll("a.skip-link").forEach(function (link) {
    link.addEventListener("click", function () {
      const main = document.getElementById("conteudo");
      if (main) {
        main.focus();
      }
    });
  });

  aplicarPreferencias();
})();
