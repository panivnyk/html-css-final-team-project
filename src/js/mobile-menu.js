(() => {
  const refs = {
    openMenuBtn: document.querySelector(".header__menu-btn"),
    closeMenuBtn: document.querySelector(".menu-close-btn"),
    menu: document.querySelector(".mob-menu"),
    body: document.querySelector(".body"),
    btn: document.querySelector(".header__menu-btn"),
  };
  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);
  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
    refs.btn.classList.toggle("is-hidden");
  }
})();