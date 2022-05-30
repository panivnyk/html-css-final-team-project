(() => {
  const refs = {
    openMenuBtn: document.querySelector(".header__menu-btn"),
    closeMenuBtn: document.querySelector(".menu-close-btn"),
    menu: document.querySelector(".mob-menu"),
    body: document.querySelector(".body"),
    btn_menu: document.querySelector(".header__menu-btn"),
    btn_buy: document.querySelector(".buy-btn--tab-dt"),
  };
  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);
  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
    refs.btn_menu.classList.toggle("is-hidden");
    refs.btn_buy.classList.toggle("is-hidden");
  }
})();