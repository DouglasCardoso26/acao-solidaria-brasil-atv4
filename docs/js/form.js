(function(){
  function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]/g, '');
    if (!cpf || cpf.length !== 11 || /^([0-9])\1+$/.test(cpf)) return false;
    let soma = 0; let resto;
    for (let i = 1; i <= 9; i++) soma += parseInt(cpf.substring(i-1, i)) * (11 - i);
    resto = (soma * 10) % 11; if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;
    soma = 0;
    for (let i = 1; i <= 10; i++) soma += parseInt(cpf.substring(i-1, i)) * (12 - i);
    resto = (soma * 10) % 11; if (resto === 10 || resto === 11) resto = 0;
    return resto === parseInt(cpf.substring(10, 11));
  }

  function initFormValidation(){
    const form = document.getElementById("form-cadastro");
    if (!form) return;

    form.addEventListener("submit", function (e) {
      // HTML5 validity first
      if (!form.checkValidity()) {
        e.preventDefault();
        alert("Por favor, preencha todos os campos obrigatórios corretamente.");
        return;
      }

      // Consistency checks
      const cpfEl = document.getElementById("cpf");
      if (cpfEl && !validarCPF(cpfEl.value)) {
        e.preventDefault();
        alert("CPF inválido. Verifique e tente novamente.");
        cpfEl.focus();
        return;
      }

      const nascEl = document.getElementById("nascimento");
      if (nascEl && nascEl.value) {
        const d = new Date(nascEl.value);
        const hoje = new Date();
        const idade = (hoje - d) / (1000*60*60*24*365.25);
        if (idade < 16) {
          e.preventDefault();
          alert('É necessário ter ao menos 16 anos para se cadastrar.');
          nascEl.focus();
          return;
        }
      }

      // Persist minimal info in localStorage for SPA demo
      try {
        localStorage.setItem("asb:lastCadastroNome", (document.getElementById("nome")||{}).value || "");
      } catch(_) {}

      // Success message
      e.preventDefault();
      const sucesso = document.createElement("div");
      sucesso.textContent = "✅ Cadastro enviado com sucesso! Obrigado por participar.";
      sucesso.style.background = "#e0ffe0";
      sucesso.style.border = "1px solid #00a000";
      sucesso.style.padding = "12px";
      sucesso.style.marginTop = "12px";
      sucesso.style.borderRadius = "8px";
      sucesso.style.textAlign = "center";
      sucesso.style.fontWeight = "600";
      form.appendChild(sucesso);
      form.reset();
      setTimeout(() => sucesso.remove(), 4000);
    }, { once: true });
  }

  // Expose globally for SPA re-init and init on DOMContentLoaded
  window.ASBForm = { init: initFormValidation };

  document.addEventListener("DOMContentLoaded", initFormValidation);
})();