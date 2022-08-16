import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  const callButton = document.querySelector('.header__button');
  const modal = document.querySelector('.modal');
  const body = document.querySelector('.body');
  const modalForm = modal.querySelector('.form');
  // const modalFormSubmitButton = modal.querySelector('button[type="submit"]');

  const accordionButtons = document.querySelectorAll('.accordion__button');
  const accordions = document.querySelectorAll('.accordion');

  for (let accordion of accordions) {
    if (window.innerWidth < 768) {
      accordion.querySelector('.accordion__body').classList.add('accordion__body_closed');
      accordion.querySelector('.accordion__button').classList.remove('accordion__button_hidden');
    }

  }

  function outsideEvtListener(event) {
    const target = event.target;
    if (target.classList.contains('modal__overlay')) {
      modal.classList.remove('modal_opened');
      body.classList.remove('scroll-lock');
      document.removeEventListener('click', outsideEvtListener);
      modalForm.reset();
    }
  }

  function modalClose() {
    modal.classList.remove('modal_opened');
    body.classList.remove('scroll-lock');
    document.removeEventListener('click', outsideEvtListener);
    modalForm.reset();
  }


  callButton.addEventListener('click', function () {
    const modalClosedButton = modal.querySelector('.modal__close-btn');
    modal.classList.add('modal_opened');
    body.classList.add('scroll-lock');
    document.addEventListener('click', outsideEvtListener);
    modalClosedButton.addEventListener('click', modalClose);
    // modalFormSubmitButton.addEventListener('click', modalClosed);
  });

  for (let button of accordionButtons) {
    button.addEventListener('click', function (event) {
      const accordionBody = event.target.closest('.accordion').querySelector('.accordion__body');
      if (button.classList.contains('accordion__button_closed')) {
        button.classList.toggle('accordion__button_closed');
        accordionBody.classList.toggle('accordion__body_closed');
      } else {
        for (let elem of accordions) {
          elem.querySelector('.accordion__body').classList.add('accordion__body_closed');
          elem.querySelector('.accordion__button').classList.remove('accordion__button_closed');
        }
        accordionBody.classList.toggle('accordion__body_closed');
        button.classList.toggle('accordion__button_closed');
      }
    });
  }

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
