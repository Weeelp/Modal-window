'use strict';

const modalWindow = document.querySelector('.modal-window'),
  overlay = document.querySelector('.overlay'),
  btnCloseModalWindow = document.querySelector('.close-modal-window'),
  btnShowModalWindow = document.querySelectorAll('.show-modal-window');

for (let i = 0; i < btnShowModalWindow.length; i++) {
  btnShowModalWindow[i].addEventListener('click', () => {
    modalWindow.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

btnCloseModalWindow.addEventListener('click', addHiddenClass);
overlay.addEventListener('click', addHiddenClass);

function addHiddenClass() {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
}

document.addEventListener('keyup', e => {
  if (e.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
    addHiddenClass();
  }
});
