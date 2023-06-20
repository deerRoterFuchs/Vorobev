/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider.js */ \"./src/scripts/slider.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  (0,_slider_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tYWluLmpzLmpzIiwibWFwcGluZ3MiOiI7O0FBQWlDO0FBRWpDQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQUk7RUFFOUNGLHNEQUFNLEVBQUU7QUFDWixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ndWxwLy4vc3JjL3NjcmlwdHMvbWFpbi5qcz8yOTYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzbGlkZXIgZnJvbSBcIi4vc2xpZGVyLmpzXCI7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKT0+e1xyXG5cclxuICAgIHNsaWRlcigpO1xyXG59KSJdLCJuYW1lcyI6WyJzbGlkZXIiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/main.js\n");

/***/ }),

/***/ "./src/scripts/slider.js":
/*!*******************************!*\
  !*** ./src/scripts/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar slider = function slider() {\n  var offset = 0;\n  var sliderLine = document.querySelector(\".slider-line\"),\n    btnPrev = document.querySelector(\".slider-prev\"),\n    btnNext = document.querySelector('.slider-next'),\n    slides = document.querySelectorAll(\".result__slide\");\n  var count = 0;\n  var width;\n  function init() {\n    width = document.querySelector('.result__slider').offsetWidth;\n    sliderLine.style.width = width * slides.length + \"px\";\n    slides.forEach(function (item) {\n      item.style.width = width + \"px\";\n    });\n    rollSlider();\n  }\n  window.addEventListener(\"resize\", init);\n  init();\n  btnNext.addEventListener(\"click\", function () {\n    count++;\n    if (count >= slides.length) {\n      count = 0;\n    }\n    rollSlider();\n  });\n  btnPrev.addEventListener(\"click\", function () {\n    count--;\n    if (count < 0) {\n      count = slides.length - 1;\n    }\n    rollSlider();\n  });\n  function rollSlider() {\n    sliderLine.style.transform = \"translate(-\" + count * width + \"px)\";\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zbGlkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFNQSxDQUFBLEVBQWM7RUFDdEIsSUFBSUMsTUFBTSxHQUFHLENBQUM7RUFDZCxJQUFNQyxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGNBQWMsQ0FBQztJQUNyREMsT0FBTyxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxjQUFjLENBQUM7SUFDaERFLE9BQU8sR0FBRUgsUUFBUSxDQUFDQyxhQUFhLENBQUMsY0FBYyxDQUFDO0lBQy9DRyxNQUFNLEdBQUdKLFFBQVEsQ0FBQ0ssZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUM7RUFDeEQsSUFBSUMsS0FBSyxHQUFHLENBQUM7RUFDYixJQUFJQyxLQUFLO0VBRVQsU0FBU0MsSUFBSUEsQ0FBQSxFQUFHO0lBQ1pELEtBQUssR0FBR1AsUUFBUSxDQUFDQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsQ0FBQ1EsV0FBVztJQUM3RFYsVUFBVSxDQUFDVyxLQUFLLENBQUNILEtBQUssR0FBR0EsS0FBSyxHQUFDSCxNQUFNLENBQUNPLE1BQU0sR0FBRSxJQUFJO0lBQ2xEUCxNQUFNLENBQUNRLE9BQU8sQ0FBQyxVQUFBQyxJQUFJLEVBQUc7TUFDbEJBLElBQUksQ0FBQ0gsS0FBSyxDQUFDSCxLQUFLLEdBQUdBLEtBQUssR0FBRyxJQUFJO0lBQ25DLENBQUMsQ0FBQztJQUNGTyxVQUFVLEVBQUU7RUFDaEI7RUFDQUMsTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUVSLElBQUksQ0FBQztFQUN2Q0EsSUFBSSxFQUFFO0VBRU5MLE9BQU8sQ0FBQ2EsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQUk7SUFDbENWLEtBQUssRUFBRTtJQUNQLElBQUdBLEtBQUssSUFBSUYsTUFBTSxDQUFDTyxNQUFNLEVBQUM7TUFDdEJMLEtBQUssR0FBRyxDQUFDO0lBQ2I7SUFDQVEsVUFBVSxFQUFFO0VBQ2hCLENBQUMsQ0FBQztFQUVGWixPQUFPLENBQUNjLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFJO0lBQ2xDVixLQUFLLEVBQUU7SUFDUCxJQUFHQSxLQUFLLEdBQUcsQ0FBQyxFQUFDO01BQ1RBLEtBQUssR0FBR0YsTUFBTSxDQUFDTyxNQUFNLEdBQUUsQ0FBQztJQUM1QjtJQUNBRyxVQUFVLEVBQUU7RUFDaEIsQ0FBQyxDQUFDO0VBRUYsU0FBU0EsVUFBVUEsQ0FBQSxFQUFFO0lBQ2pCZixVQUFVLENBQUNXLEtBQUssQ0FBQ08sU0FBUyxHQUFHLGFBQWEsR0FBQ1gsS0FBSyxHQUFDQyxLQUFLLEdBQUMsS0FBSztFQUNoRTtBQUNKLENBQUM7QUFDRCxpRUFBZVYsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2d1bHAvLi9zcmMvc2NyaXB0cy9zbGlkZXIuanM/ZjMwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzbGlkZXIgPSBmdW5jdGlvbigpIHtcclxuICAgIGxldCBvZmZzZXQgPSAwO1xyXG4gICAgY29uc3Qgc2xpZGVyTGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVyLWxpbmVcIiksXHJcbiAgICAgICAgYnRuUHJldiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVyLXByZXZcIiksXHJcbiAgICAgICAgYnRuTmV4dCA9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlci1uZXh0JyksXHJcbiAgICAgICAgc2xpZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yZXN1bHRfX3NsaWRlXCIpO1xyXG4gICAgbGV0IGNvdW50ID0gMDtcclxuICAgIGxldCB3aWR0aDtcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgICAgICB3aWR0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRfX3NsaWRlcicpLm9mZnNldFdpZHRoO1xyXG4gICAgICAgIHNsaWRlckxpbmUuc3R5bGUud2lkdGggPSB3aWR0aCpzbGlkZXMubGVuZ3RoKyBcInB4XCI7XHJcbiAgICAgICAgc2xpZGVzLmZvckVhY2goaXRlbSA9PntcclxuICAgICAgICAgICAgaXRlbS5zdHlsZS53aWR0aCA9IHdpZHRoICsgXCJweFwiO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcm9sbFNsaWRlcigpXHJcbiAgICB9XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBpbml0KTtcclxuICAgIGluaXQoKTtcclxuXHJcbiAgICBidG5OZXh0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xyXG4gICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgaWYoY291bnQgPj0gc2xpZGVzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIGNvdW50ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcm9sbFNsaWRlcigpO1xyXG4gICAgfSlcclxuXHJcbiAgICBidG5QcmV2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xyXG4gICAgICAgIGNvdW50LS07XHJcbiAgICAgICAgaWYoY291bnQgPCAwKXtcclxuICAgICAgICAgICAgY291bnQgPSBzbGlkZXMubGVuZ3RoIC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICByb2xsU2xpZGVyKCk7XHJcbiAgICB9KVxyXG5cclxuICAgIGZ1bmN0aW9uIHJvbGxTbGlkZXIoKXtcclxuICAgICAgICBzbGlkZXJMaW5lLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlKC1cIitjb3VudCp3aWR0aCtcInB4KVwiO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHNsaWRlcjsiXSwibmFtZXMiOlsic2xpZGVyIiwib2Zmc2V0Iiwic2xpZGVyTGluZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImJ0blByZXYiLCJidG5OZXh0Iiwic2xpZGVzIiwicXVlcnlTZWxlY3RvckFsbCIsImNvdW50Iiwid2lkdGgiLCJpbml0Iiwib2Zmc2V0V2lkdGgiLCJzdHlsZSIsImxlbmd0aCIsImZvckVhY2giLCJpdGVtIiwicm9sbFNsaWRlciIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0cmFuc2Zvcm0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/slider.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/scripts/main.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/slider.js");
/******/ 	
/******/ })()
;