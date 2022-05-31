// Кнопка 1
(() => {
    const refs = {
    btnFront: document.querySelector(".arrow-button-front"),
    btnBack: document.querySelector(".arrow-button-back"),
    cardBox: document.querySelector(".card-box"),
    cardBack: document.querySelector(".card-back"),
    };
    refs.btnFront.addEventListener("click", toggleCard);
    refs.btnBack.addEventListener("click", toggleCard);
    function toggleCard() {
        refs.cardBox.classList.toggle("do-flip");
        refs.cardBack.classList.toggle("do-flip");

     }
})();

// Кнопка 2
(() => {
    const refs = {
      btnFront2: document.querySelector(".arrow-button-front-2"),
      btnBack2: document.querySelector(".arrow-button-back-2"),
      cardBox2: document.querySelector(".card-box-2"),
      cardBack2: document.querySelector(".card-back-2"),
    };

    refs.btnFront2.addEventListener("click", toggleCard);
    refs.btnBack2.addEventListener("click", toggleCard);
    function toggleCard() {

        refs.cardBox2.classList.toggle("do-flip");
        refs.cardBack2.classList.toggle("do-flip");
     }
})();

  // Кнопка 3
(() => {
    const refs = {
      btnFront3: document.querySelector(".arrow-button-front-3"),
      btnBack3: document.querySelector(".arrow-button-back-3"),
      cardBox3: document.querySelector(".card-box-3"),
      cardBack3: document.querySelector(".card-back-3"),
    };

    refs.btnFront3.addEventListener("click", toggleCard);
    refs.btnBack3.addEventListener("click", toggleCard);
    function toggleCard() {

        refs.cardBox3.classList.toggle("do-flip");
        refs.cardBack3.classList.toggle("do-flip");
     }
})();