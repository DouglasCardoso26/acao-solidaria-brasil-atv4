// Hash-based SPA loader (basic). No frameworks. Degrades to multi-page when opened via file://
(function(){
  /*ACTIVE_LINK*/
  function setActiveLink(route){
    // normalize
    const map = { "":"/", "/":"#", "#/":"/" };
    const r = route || "/";
    const links = document.querySelectorAll('nav ul.menu a');
    links.forEach(a => {
      a.removeAttribute('aria-current');
      a.classList.remove('is-active');
      const dr = a.getAttribute('data-route') || "/";
      if (dr === r) {
        a.setAttribute('aria-current', 'page');
        a.classList.add('is-active');
      }
    });
  }
  /*LOADING_BAR*/
  let loaderEl = null;
  function showLoader(){
    if (loaderEl) return;
    loaderEl = document.createElement('div');
    loaderEl.setAttribute('role', 'status');
    loaderEl.style.position = 'fixed';
    loaderEl.style.top = '0'; loaderEl.style.left = '0';
    loaderEl.style.right = '0'; loaderEl.style.height = '3px';
    loaderEl.style.background = 'linear-gradient(90deg, rgba(26,92,55,.2), rgba(26,92,55,1))';
    loaderEl.style.animation = 'asb-load 1s infinite';
    loaderEl.style.zIndex = '2000';
    document.body.appendChild(loaderEl);
  }
  function hideLoader(){
    if (loaderEl) { loaderEl.remove(); loaderEl = null; }
  }

  const isFile = location.protocol === 'file:'; // Chrome bloqueia fetch() em file://
  const containerSelector = "#conteudo";
  const routes = {
    "": "index.html",
    "/": "index.html",
    "/home": "index.html",
    "/projetos": "projetos.html",
    "/cadastro": "cadastro.html"
  };

  function extractMain(html) {
    const match = html.match(/<main[^>]*id=["']?conteudo["']?[^>]*>([\s\S]*?)<\/main>/i);
    return match ? match[1] : html;
  }

  async function load(route){
    if (isFile) return; // em file:// não tenta fazer SPA
    const target = document.querySelector(containerSelector);
    if (!target) return;
    const file = routes[route] || routes["/"];
    try {
      showLoader();
      const res = await fetch(file, { cache: "no-cache" });
      const html = await res.text();
      const inner = extractMain(html);
      hideLoader();
      target.innerHTML = inner;
      setActiveLink(route);
      if (window.ASBForm && typeof window.ASBForm.init === "function") {
        window.ASBForm.init();
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
      try { localStorage.setItem("asb:lastRoute", route); } catch(_) {}
    } catch (e) {
      const msg = "Erro ao carregar a página. Abra o projeto por um servidor (ex.: VS Code Live Server) ou publique no GitHub Pages.";
      target.innerHTML = window.Templates ? Templates.alert('warn', msg) : msg;
    }
  }

  function currentRoute(){
    const hash = location.hash.replace(/^#/, "");
    return hash || "/";
  }

  function onNavClick(e){
    if (isFile) return; // em file:// mantém navegação normal
    const a = e.target.closest("a");
    if (!a) return;
    const href = a.getAttribute("href") || "";
    if (href.endsWith(".html")) {
      e.preventDefault();
      const path = href.split("/").pop().replace(".html","");
      location.hash = path === "index" ? "/" : `/${path}`;
    }
  }

  if (!isFile) {
    window.addEventListener("hashchange", () => { setActiveLink(currentRoute()); load(currentRoute()); });
    document.addEventListener("click", onNavClick);
    document.addEventListener("DOMContentLoaded", () => {
    setActiveLink(currentRoute());
      const last = (localStorage.getItem("asb:lastRoute") || "/");
      if (!location.hash && last && last !== "/") location.hash = last;
      load(currentRoute());
    });
  }
})();