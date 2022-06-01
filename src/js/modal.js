(() => {
  const refs = {
    openModalBtn1: document.querySelector('[data-modal-open-1]'),
    openModalBtn2: document.querySelector('[data-modal-open-2]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),

    openModalContact: document.querySelectorAll('[contacts-btn]'),
    closeModalContact: document.querySelector('[modal-contacts-close]'),
    modalContacts: document.querySelector('[modal-contacts]'),
  };
  refs.openModalContact.forEach(el => {
    el.addEventListener('click', () => {
      refs.modalContacts.classList.toggle('is-hidden');
    });
  });

  refs.closeModalContact.addEventListener('click', () => {
    refs.modalContacts.classList.toggle('is-hidden');
  });

  refs.openModalBtn1.addEventListener('click', toggleModal);
  refs.openModalBtn2.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
    refs.body.classList.toggle('no-scroll');

})();
