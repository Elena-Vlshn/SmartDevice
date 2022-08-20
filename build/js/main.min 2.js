/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ios_vh_fix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/ios-vh-fix */ "./js/utils/ios-vh-fix.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

 // import {initModals} from './modules/modals/init-modals';
// ---------------------------------

window.addEventListener('DOMContentLoaded', function () {
  var callButton = document.querySelector('.header__button');
  var modal = document.querySelector('.modal');
  var body = document.querySelector('.body');
  var modalForm = modal.querySelector('.form'); // const modalFormSubmitButton = modal.querySelector('button[type="submit"]');

  var descriptionButtonOpen = document.querySelector('.about__button');
  var accordionButtons = document.querySelectorAll('.accordion__button');
  var accordions = document.querySelectorAll('.accordion');
  document.getElementById('modal-name').focus();
  document.querySelector('#modal-name').focus();

  var _iterator = _createForOfIteratorHelper(accordions),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var accordion = _step.value;

      if (window.innerWidth < 768) {
        accordion.querySelector('.accordion__body').classList.add('accordion__body_closed');
        accordion.querySelector('.accordion__button').classList.remove('accordion__button_hidden');
      }
    } // закрытие модального при клике на оверлей

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  function outsideEvtListener(event) {
    var target = event.target;

    if (target.classList.contains('modal__overlay')) {
      modalClose();
    }
  } // закрытие модального окна


  function modalClose() {
    modal.classList.remove('modal_opened');
    body.classList.remove('scroll-lock');
    document.removeEventListener('click', outsideEvtListener);
    modalForm.reset();
  } // функция раскрывает/сворачивает полное описание


  function descriptionHeightToggle(event) {
    var descriptionButton = event.target;
    var description = descriptionButton.closest('.about__inner').querySelector('.about__description');

    if (descriptionButton.classList.contains('about__button_closed')) {
      descriptionButton.classList.remove('about__button_closed');
      description.classList.toggle('about__description_opened');
      descriptionButton.textContent = 'Подробнее';
      return;
    }

    descriptionButton.classList.add('about__button_closed');
    description.classList.toggle('about__description_opened');
    descriptionButton.textContent = 'Свернуть';
  } // маска для телефона
  //  источник https://github.com/KatrinaNov/maskPhone/blob/master/maskPhone.js


  function maskPhone() {
    var elems = document.querySelectorAll('input[type="tel"]');

    function mask(event) {
      var keyCode = event.keyCode;
      var template = '+7 (___) ___-__-__';
      var def = template.replace(/\D/g, '');
      var val = event.target.value.replace(/\D/g, '');
      var i = 0;
      var newValue = template.replace(/[_\d]/g, function (a) {
        return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
      });
      i = newValue.indexOf('_');

      if (i !== -1) {
        newValue = newValue.slice(0, i);
      }

      var reg = template.substr(0, event.target.value.length).replace(/_+/g, function (a) {
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

    var _iterator2 = _createForOfIteratorHelper(elems),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var elem = _step2.value;
        elem.addEventListener('input', mask);
        elem.addEventListener('focus', mask);
        elem.addEventListener('blur', mask);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }

  maskPhone(); // открытие модального окна

  callButton.addEventListener('click', function () {
    var modalClosedButton = modal.querySelector('.modal__close-btn');
    var nameInput = modal.querySelector('#modal-name');
    modal.classList.add('modal_opened');
    nameInput.focus();
    body.classList.add('scroll-lock');
    document.addEventListener('click', outsideEvtListener);
    modalClosedButton.addEventListener('click', modalClose);
  });
  descriptionButtonOpen.addEventListener('click', descriptionHeightToggle);

  var _iterator3 = _createForOfIteratorHelper(accordionButtons),
      _step3;

  try {
    var _loop = function _loop() {
      var button = _step3.value;
      button.addEventListener('click', function (event) {
        var accordion = event.target.closest('.accordion');
        var accordionBody = accordion.querySelector('.accordion__body');

        if (button.classList.contains('accordion__button_closed')) {
          button.classList.toggle('accordion__button_closed');
          accordionBody.classList.toggle('accordion__body_closed');
          accordion.classList.toggle('accordion_active');
        } else {
          var _iterator4 = _createForOfIteratorHelper(accordions),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var elem = _step4.value;
              elem.querySelector('.accordion__body').classList.add('accordion__body_closed');
              elem.querySelector('.accordion__button').classList.remove('accordion__button_closed');
              elem.classList.remove('accordion_active');
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }

          accordionBody.classList.toggle('accordion__body_closed');
          button.classList.toggle('accordion__button_closed');
          accordion.classList.toggle('accordion_active');
        }
      });
    };

    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      _loop();
    } // Utils
    // ---------------------------------

  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  Object(_utils_ios_vh_fix__WEBPACK_IMPORTED_MODULE_0__["iosVhFix"])(); // Modules
  // ---------------------------------
  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  // window.addEventListener('load', () => {
  //   initModals();
  // });
}); // ---------------------------------
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

/***/ }),

/***/ "./js/utils/ios-checker.js":
/*!*********************************!*\
  !*** ./js/utils/ios-checker.js ***!
  \*********************************/
/*! exports provided: iosChecker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iosChecker", function() { return iosChecker; });
var iosChecker = function iosChecker() {
  return ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(navigator.platform) // iPad on iOS 13 detection
  || navigator.userAgent.includes('Mac') && 'ontouchend' in document;
};

/***/ }),

/***/ "./js/utils/ios-vh-fix.js":
/*!********************************!*\
  !*** ./js/utils/ios-vh-fix.js ***!
  \********************************/
/*! exports provided: iosVhFix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iosVhFix", function() { return iosVhFix; });
/* harmony import */ var _ios_checker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ios-checker */ "./js/utils/ios-checker.js");


var iosVhFix = function iosVhFix() {
  if (!(!!window.MSInputMethodContext && !!document.documentMode)) {
    if (Object(_ios_checker__WEBPACK_IMPORTED_MODULE_0__["iosChecker"])()) {
      var vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
      window.addEventListener('resize', function () {
        vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
      });
    }
  }
};



/***/ })

/******/ });
//# sourceMappingURL=main.min.js.map