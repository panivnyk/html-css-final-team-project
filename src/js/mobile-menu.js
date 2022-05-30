(() => {
  const refs = {
    openMenuBtn: document.querySelector(".header__menu-btn"),
    closeMenuBtn: document.querySelector(".menu-close-btn"),
    clickBtnBuy: document.querySelector(".buy-btn"),
    clickMenuItem: document.querySelector(".mob-menu-nav"),
    menu: document.querySelector(".mob-menu"),
    body: document.querySelector(".body"),
    btn_menu: document.querySelector(".header__menu-btn"),
    btn_buy: document.querySelector(".buy-btn--tab-dt"),

  };
  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);
  refs.clickBtnBuy.addEventListener("click", toggleMenu);
  refs.clickMenuItem.addEventListener("click", toggleMenu);
  function toggleMenu() {
    refs.menu.classList.toggle("mob-menu__animate");
    refs.body.classList.toggle("no-scroll");
    refs.btn_menu.classList.toggle("is-hidden");
    refs.btn_buy.classList.toggle("is-hidden");
  }
})();