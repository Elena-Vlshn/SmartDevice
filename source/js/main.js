import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  const callButton = document.querySelector('.header__button');
  const modal = document.querySelector('.modal');
  const body = document.querySelector('.body');
  const modalForm = modal.querySelector('.form');
  // const modalFormSubmitButton = modal.querySelector('button[type="submit"]');
  const descriptionButtonOpen = document.querySelector('.about__button');

  const accordionButtons = document.querySelectorAll('.accordion__button');
  const accordions = document.querySelectorAll('.accordion');

  document.getElementById('modal-name').focus();
  document.querySelector('#modal-name').focus();

  for (let accordion of accordions) {
    if (window.innerWidth < 768) {
      accordion.querySelector('.accordion__body').classList.add('accordion__body_closed');
      accordion.querySelector('.accordion__button').classList.remove('accordion__button_hidden');
    }
  }

  // закрытие модального при клике на оверлей
  function outsideEvtListener(event) {
    const target = event.target;
    if (target.classList.contains('modal__overlay')) {
      modalClose();
    }
  }

  // закрытие модального окна
  function modalClose() {
    modal.classList.remove('modal_opened');
    body.classList.remove('scroll-lock');
    document.removeEventListener('click', outsideEvtListener);
    modalForm.reset();
  }

  // функция раскрывает/сворачивает полное описание
  function descriptionHeightToggle(event) {
    const descriptionButton = event.target;
    const description = descriptionButton.closest('.about__inner').querySelector('.about__description');
    if (descriptionButton.classList.contains('about__button_closed')) {
      descriptionButton.classList.remove('about__button_closed');
      description.classList.toggle('about__description_opened');
      descriptionButton.textContent = 'Подробнее';
      return;
    }
    descriptionButton.classList.add('about__button_closed');
    description.classList.toggle('about__description_opened');
    descriptionButton.textContent = 'Свернуть';
  }


  // маска для телефона
  //  источник https://github.com/KatrinaNov/maskPhone/blob/master/maskPhone.js

  function maskPhone() {
    const elems = document.querySelectorAll('input[type="tel"]');

    function mask(event) {
      const keyCode = event.keyCode;
      const template = '+7 (___) ___-__-__';
      const def = template.replace(/\D/g, '');
      const val = event.target.value.replace(/\D/g, '');

      let i = 0;
      let newValue = template.replace(/[_\d]/g, function (a) {
        return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
      });
      i = newValue.indexOf('_');
      if (i !== -1) {
        newValue = newValue.slice(0, i);
      }
      let reg = template.substr(0, event.target.value.length).replace(/_+/g,
          function (a) {
            return '\\d{1,' + a.length + '}';
          }).replace(/[+()]/g, '\\$&');
      reg = new RegExp('^' + reg + '$');
      if (!reg.test(event.target.value) || event.target.value.length < 5 || keyCode > 47 && keyCode < 58) {
        event.target.value = newValue;
      }
      if (event.type === 'blur' && event.target.value.length < 5) {
        event.target.value = ' ';
      }
    }

    for (const elem of elems) {
      elem.addEventListener('input', mask);
      elem.addEventListener('focus', mask);
      elem.addEventListener('blur', mask);
    }
  }

  maskPhone();

  // открытие модального окна
  callButton.addEventListener('click', function () {
    const modalClosedButton = modal.querySelector('.modal__close-btn');
    const nameInput = modal.querySelector('#modal-name');
    nameInput.focus();
    modal.classList.add('modal_opened');
    body.classList.add('scroll-lock');
    document.addEventListener('click', outsideEvtListener);
    modalClosedButton.addEventListener('click', modalClose);
  });

  descriptionButtonOpen.addEventListener('click', descriptionHeightToggle);

  for (let button of accordionButtons) {
    button.addEventListener('click', function (event) {
      const accordion = event.target.closest('.accordion');
      const accordionBody = accordion.querySelector('.accordion__body');
      if (button.classList.contains('accordion__button_closed')) {
        button.classList.toggle('accordion__button_closed');
        accordionBody.classList.toggle('accordion__body_closed');
        accordion.classList.toggle('accordion_active');
      } else {
        for (let elem of accordions) {
          elem.querySelector('.accordion__body').classList.add('accordion__body_closed');
          elem.querySelector('.accordion__button').classList.remove('accordion__button_closed');
          elem.classList.remove('accordion_active');
        }
        accordionBody.classList.toggle('accordion__body_closed');
        button.classList.toggle('accordion__button_closed');
        accordion.classList.toggle('accordion_active');
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
