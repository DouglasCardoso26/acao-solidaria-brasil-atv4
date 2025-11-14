
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".hamburger");
  const menu = document.querySelector("ul.menu");

  if (!btn || !menu) return;

  // Helpers
  const openMenu = () => {
    menu.classList.add("is-open");
    menu.style.display = "flex";
    btn.setAttribute("aria-expanded", "true");
    document.addEventListener("click", outsideClose, { capture: true });
    document.addEventListener("keydown", escClose);
  };

  const closeMenu = () => {
    menu.classList.remove("is-open");
    menu.style.display = "";
    btn.setAttribute("aria-expanded", "false");
    document.removeEventListener("click", outsideClose, { capture: true });
    document.removeEventListener("keydown", escClose);
  };

  const toggle = () => {
    const isOpen = menu.classList.contains("is-open");
    isOpen ? closeMenu() : openMenu();
  };

  const outsideClose = (e) => {
    if (!menu.contains(e.target) && !btn.contains(e.target)) closeMenu();
  };

  const escClose = (e) => {
    if (e.key === "Escape") closeMenu();
  };

  // Bind
  btn.setAttribute("aria-controls", "primary-menu");
  btn.setAttribute("aria-expanded", "false");
  menu.id = "primary-menu";

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    toggle();
  });

  // Close after click on a link (mobile)
  menu.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (a) closeMenu();
  });
});
