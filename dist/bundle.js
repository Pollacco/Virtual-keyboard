/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n  }\\r\\n  \\r\\n  html {\\r\\n    font-size: 100%;\\r\\n    font-family: 'Ubuntu', Arial, sans-serif;\\r\\n  }\\r\\n  \\r\\n  body {\\r\\n    background: aqua;\\r\\n  }\\r\\n  \\r\\n  main {\\r\\n    width: 1020px;\\r\\n    margin: auto;\\r\\n  }\\r\\n  \\r\\n  .keyboard {\\r\\n    display: grid;\\r\\n    grid-row-gap: 10px;\\r\\n    padding: 10px;\\r\\n    border: 1px solid;\\r\\n    position: relative;\\r\\n    overflow: hidden;\\r\\n    background: #2c2c2c;\\r\\n    border-radius: 5px;\\r\\n    -webkit-border-radius: 5px;\\r\\n    -moz-border-radius: 5px;\\r\\n    -ms-border-radius: 5px;\\r\\n    -o-border-radius: 5px;\\r\\n    border: 3px solid #222;\\r\\n  }\\r\\n  \\r\\n  .keyboard__row {\\r\\n    display: grid;\\r\\n    grid-gap: 10px;\\r\\n    grid-row-gap: 10px;\\r\\n    height: 50px;\\r\\n  }\\r\\n  \\r\\n  .keyboard__key {\\r\\n    display: flex;\\r\\n    cursor: pointer;\\r\\n    border-radius: 3px;\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    background: rgb(100,100,100) radial-gradient(circle at 0 0, rgba(255,255,255,.75), rgba(255,255,255,.35));\\r\\n    box-shadow: inset rgba(0,0,0,.75) -1px -1px 2px, inset rgba(255,255,255,.9) 1px 1px 2px, rgba(0,0,0,.8) 1px 1px 2px -1px;\\r\\n    transition: all .2s ease;\\r\\n    -webkit-border-radius: 3px;\\r\\n    -moz-border-radius: 3px;\\r\\n    -ms-border-radius: 3px;\\r\\n    -o-border-radius: 3px;\\r\\n    user-select: none;\\r\\n  }\\r\\n  \\r\\n  [data-fn=\\\"false\\\"].active {\\r\\n    box-shadow: inset 0px 1px 2px 1px rgba(0,0,0,.9), inset 0 0 20px 2em rgba(255,255,255,.2);\\r\\n  }\\r\\n  \\r\\n  [data-fn=\\\"true\\\"].active {\\r\\n    box-shadow: inset 0px 1px 2px 1px rgba(0,0,0,.9), inset 0 0 20px 2em rgba(255,255,255, 0);\\r\\n  }\\r\\n  \\r\\n  [data-fn=\\\"false\\\"].active .letter,\\r\\n  [data-fn=\\\"true\\\"].active .letter {\\r\\n    transform: translateY(1px)  ;\\r\\n    -webkit-transform: translateY(1px)  ;\\r\\n    -moz-transform: translateY(1px)  ;\\r\\n    -ms-transform: translateY(1px)  ;\\r\\n    -o-transform: translateY(1px)  ;\\r\\n    color: #244618;\\r\\n  }\\r\\n  \\r\\n  [data-fn=\\\"true\\\"] {\\r\\n    background: rgb(78, 78, 78) radial-gradient(circle at 0 0, rgba(136, 134, 134, 0.65), rgba(167, 167, 167, 0.35));\\r\\n    box-shadow: inset rgba(0,0,0,.75) -1px -1px 2px, inset rgba(161, 160, 160, 0.9) 1px 1px 2px, rgba(0,0,0,.8) 1px 1px 2px -1px;\\r\\n  }\\r\\n  \\r\\n  [data-fn=\\\"true\\\"] > .letter {\\r\\n    font-size: 16px;\\r\\n  }\\r\\n  \\r\\n  [data-code=\\\"CapsLock\\\"] {\\r\\n    width: 86px;\\r\\n  }\\r\\n  \\r\\n  [data-code=\\\"ShiftLeft\\\"] {\\r\\n    width: 100px;\\r\\n  }\\r\\n  \\r\\n  [data-code=\\\"ShiftRight\\\"] {\\r\\n    width: 120px;\\r\\n  }\\r\\n  \\r\\n  [data-code=\\\"Enter\\\"] {\\r\\n    width: 100px;\\r\\n  }\\r\\n  \\r\\n  [data-code=\\\"Tab\\\"] {\\r\\n    width: 76px;\\r\\n  }\\r\\n  \\r\\n  [data-code=\\\"ControlLeft\\\"] {\\r\\n    width: 76px;\\r\\n  }\\r\\n  \\r\\n  [data-code=\\\"ControlRight\\\"] {\\r\\n    width: 60px;\\r\\n  }\\r\\n  \\r\\n  [data-code=\\\"Backspace\\\"] {\\r\\n    width: 115px;\\r\\n  }\\r\\n  \\r\\n  [data-code=\\\"Space\\\"] {\\r\\n    width: 420px;\\r\\n  }\\r\\n  \\r\\n  [data-code=\\\"AltLeft\\\"],\\r\\n  [data-code=\\\"AltRight\\\"] {\\r\\n    width: 76px;\\r\\n  }\\r\\n  \\r\\n  [data-code=\\\"ArrowLeft\\\"],\\r\\n  [data-code=\\\"ArrowUp\\\"],\\r\\n  [data-code=\\\"ArrowDown\\\"],\\r\\n  [data-code=\\\"ArrowRight\\\"] {\\r\\n    background: rgb(125, 253, 75);\\r\\n  }\\r\\n  \\r\\n  \\r\\n  .active {\\r\\n    background: rgb(60, 212, 0);\\r\\n  }\\r\\n  \\r\\n  .letter {\\r\\n    font-size: 20px;\\r\\n    width: 100%;\\r\\n    text-align: center;\\r\\n    transition: all .2s ease;\\r\\n    -webkit-transition: all .2s ease;\\r\\n    -moz-transition: all .2s ease;\\r\\n    -ms-transition: all .2s ease;\\r\\n    -o-transition: all .2s ease;\\r\\n    transform: translateX(0);\\r\\n    -webkit-transform: translateX(0);\\r\\n    -moz-transform: translateX(0);\\r\\n    -ms-transform: translateX(0);\\r\\n    -o-transform: translateX(0);\\r\\n    transform-origin: center;\\r\\n  }\\r\\n  \\r\\n  .subtitle, .hint {\\r\\n    color: #666;\\r\\n  }\\r\\n  \\r\\n  textarea.output {\\r\\n    resize: none;\\r\\n    width: 100%;\\r\\n    height: 200px;\\r\\n    padding: 10px;\\r\\n    box-sizing: border-box;\\r\\n    font-size: 18px;\\r\\n    letter-spacing: 1px;\\r\\n    margin-top: 50px;\\r\\n    margin-bottom: 10px;\\r\\n  }\\r\\n  \\r\\n  .sub {\\r\\n    width: 100%;\\r\\n    color: #68688a;\\r\\n    text-align: left;\\r\\n    padding-left: 10px;\\r\\n    transition: all .2s ease;\\r\\n    -webkit-transition: all .2s ease;\\r\\n    -moz-transition: all .2s ease;\\r\\n    -ms-transition: all .2s ease;\\r\\n    -o-transition: all .2s ease;\\r\\n  }\\r\\n  \\r\\n  .sub.sub-active:not(:empty) {\\r\\n    color: rgb(19, 80, 0);\\r\\n    font-size: 23px;\\r\\n  }\\r\\n  \\r\\n  .sub.sub-active:not(:empty) ~ .letter.sub-inactive {\\r\\n    color: #68688a;\\r\\n    font-size: 16px;\\r\\n    text-align: center;\\r\\n    padding-right: 10px;\\r\\n    width: 50%;\\r\\n    transform-origin: center;\\r\\n    transform: translateX(20px);\\r\\n    -webkit-transform: translateX(20px);\\r\\n    -moz-transform: translateX(20px);\\r\\n    -ms-transform: translateX(20px);\\r\\n    -o-transform: translateX(20px);\\r\\n  }\\r\\n  \\r\\n  @keyframes fadeInOut {\\r\\n    0% {\\r\\n      opacity: 0.5;\\r\\n      transform: scale(0.8);\\r\\n      -webkit-transform: scale(0.8);\\r\\n      -moz-transform: scale(0.8);\\r\\n      -ms-transform: scale(0.8);\\r\\n      -o-transform: scale(0.8);\\r\\n  }\\r\\n    50% {\\r\\n      opacity: 1;\\r\\n      transform: scale(1.5);\\r\\n      -webkit-transform: scale(1.5);\\r\\n      -moz-transform: scale(1.5);\\r\\n      -ms-transform: scale(1.5);\\r\\n      -o-transform: scale(1.5);\\r\\n  }\\r\\n    100% {\\r\\n      opacity: 0;\\r\\n      transform: scale(2.5);\\r\\n      -webkit-transform: scale(2.5);\\r\\n      -moz-transform: scale(2.5);\\r\\n      -ms-transform: scale(2.5);\\r\\n      -o-transform: scale(2.5);\\r\\n  }\\r\\n  }\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Key.js":
/*!********************!*\
  !*** ./src/Key.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Key)\n/* harmony export */ });\n/* harmony import */ var _create_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.js */ \"./src/create.js\");\n\r\n\r\nclass Key {\r\n  constructor({ small, shift, code }) {\r\n    this.code = code\r\n    this.small = small\r\n    this.shift = shift\r\n    this.isFnKey = Boolean(small.match(/Ctrl|arr|Alt|Shift|Tab|Back|Del|Enter|Caps|Win/))\r\n\r\n    if (shift  && shift.match(/[^a-zA-Zа-яА-ЯёЁ0-9]/)) {\r\n      this.sub = (0,_create_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'sub', this.shift)\r\n    } else {\r\n      this.sub = (0,_create_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'sub', '')\r\n    }\r\n\r\n    this.letter = (0,_create_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'letter', small)\r\n    this.div = (0,_create_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'keyboard__key', [this.sub, this.letter], null, ['code', this.code],\r\n    this.isFnKey ? ['fn', 'true'] : ['fn', 'false'])\r\n  }\r\n} \n\n//# sourceURL=webpack://virtual-keyboard/./src/Key.js?");

/***/ }),

/***/ "./src/Keyboard.js":
/*!*************************!*\
  !*** ./src/Keyboard.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Keyboard)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n/* harmony import */ var _create_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.js */ \"./src/create.js\");\n/* harmony import */ var _language_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./language.js */ \"./src/language.js\");\n/* harmony import */ var _Key_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Key.js */ \"./src/Key.js\");\n\r\n\r\n\r\n\r\n\r\nconst main = (0,_create_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('main', '',\r\n  [ (0,_create_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('h1', 'title', 'My Virtual Keyboard'),\r\n    (0,_create_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('h3', 'subtitle', 'Virtual Keyboard for RSS-school task')])\r\n\r\nclass Keyboard {\r\n  constructor(keysOrder) {\r\n    this.keysOrder = keysOrder\r\n    this.keysPressed = {}\r\n    this.isCaps = false\r\n  }\r\n\r\n  init(langCode) {\r\n    this.keyBase = _language_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"][langCode]\r\n    this.output = (0,_create_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('textarea', 'output', null, main,\r\n      ['placeholder', 'Just typing'],\r\n      ['rows', 5],\r\n      ['cols', 50],\r\n      ['spellcheck', false],\r\n      ['autocorrect', 'off'])\r\n    this.container = (0,_create_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', 'keyboard', null, main, ['language', langCode])\r\n    document.body.prepend(main)\r\n    return this\r\n  }\r\n\r\n  generateLayout() {\r\n    this.keyButtons = []\r\n    this.keysOrder.forEach((row, i) => {\r\n      const rowElement = (0,_create_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', 'keyboard__row', null, this.container, ['row', i + 1])\r\n      rowElement.style.gridTemplateColumns = `repeat(${row.length}, 1fr)`\r\n      row.forEach((code) => {\r\n        const keyObj = this.keyBase.find((key) => key.code === code)\r\n        if (keyObj) {\r\n          const keyButton = new _Key_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](keyObj)\r\n          this.keyButtons.push(keyButton)\r\n          rowElement.appendChild(keyButton.div)\r\n        }\r\n      })\r\n    })\r\n\r\n    document.addEventListener('keydown', this.handleEvent)\r\n    document.addEventListener('keyup', this.handleEvent)\r\n  }\r\n\r\n  handleEvent = (e) => {\r\n    if (e.stopPropagation) e.stopPropagation()\r\n    const { code, type } = e\r\n    const keyobj = this.keyButtons.find((key) => key.code === code)\r\n    if (!keyobj) return\r\n    this.output.focus()\r\n\r\n    if (type.match(/keydown|mousedown/)) {\r\n      if (type.match(/key/)) e.preventDefault()\r\n      keyobj.div.classList.add('active')\r\n    } else if (type.match(/keyup|mouseup/)) {\r\n      keyobj.div.classList.remove('active')\r\n    }\r\n  }\r\n} \n\n//# sourceURL=webpack://virtual-keyboard/./src/Keyboard.js?");

/***/ }),

/***/ "./src/create.js":
/*!***********************!*\
  !*** ./src/create.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ create)\n/* harmony export */ });\n/**\r\n * @param {String} el\r\n * @param {String} classNames\r\n * @param {HTMLElement} child\r\n * @param {HTMLElement} parent\r\n * @param  {...array} dataAttr\r\n */\r\n\r\nfunction create(el, classNames, child, parent, ...dataAttr) {\r\n    let element = null;\r\n    try {\r\n        element = document.createElement(el);\r\n    } catch (error) {\r\n        throw new Error('Unable to create HTMLElement! Give a proper tag name');\r\n    }\r\n\r\n    if (classNames) element.classList.add(...classNames.split(' ')); // \"class1 class2 class3\"\r\n\r\n    if (child && Array.isArray(child)) {\r\n        child.forEach((e) => e && element.appendChild(e));\r\n    } else if (child && typeof child === 'object') {\r\n        element.appendChild(child);\r\n    } else if (child && typeof child === 'string') {\r\n        element.innerHTML = child;\r\n    }\r\n\r\n    if (parent) {\r\n        parent.appendChild(element);\r\n    }\r\n\r\n    if (dataAttr.length) {\r\n        dataAttr.forEach(([attrName, attrValue]) => {\r\n        if (attrValue === '') {\r\n            element.setAttribute(attrName, '');\r\n        }\r\n        if (attrName.match(/value|id|placeholder|cols|rows|autocorrect|spellcheck/)) {\r\n            element.setAttribute(attrName, attrValue);\r\n        } else {\r\n            element.dataset[attrName] = attrValue;\r\n        }\r\n        });\r\n    }\r\n    return element;\r\n}     \n\n//# sourceURL=webpack://virtual-keyboard/./src/create.js?");

/***/ }),

/***/ "./src/en.js":
/*!*******************!*\
  !*** ./src/en.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([\r\n    {\r\n      small: '`',\r\n      shift: '~',\r\n      code: 'Backquote',\r\n    },\r\n    {\r\n      small: '1',\r\n      shift: '!',\r\n      code: 'Digit1',\r\n    },\r\n    {\r\n      small: '2',\r\n      shift: '@',\r\n      code: 'Digit2',\r\n    },\r\n    {\r\n      small: '3',\r\n      shift: '#',\r\n      code: 'Digit3',\r\n    },\r\n    {\r\n      small: '4',\r\n      shift: '$',\r\n      code: 'Digit4',\r\n    },\r\n    {\r\n      small: '5',\r\n      shift: '%',\r\n      code: 'Digit5',\r\n    },\r\n    {\r\n      small: '6',\r\n      shift: '^',\r\n      code: 'Digit6',\r\n    },\r\n    {\r\n      small: '7',\r\n      shift: '&',\r\n      code: 'Digit7',\r\n    },\r\n    {\r\n      small: '8',\r\n      shift: '*',\r\n      code: 'Digit8',\r\n    },\r\n    {\r\n      small: '9',\r\n      shift: '(',\r\n      code: 'Digit9',\r\n    },\r\n    {\r\n      small: '0',\r\n      shift: ')',\r\n      code: 'Digit0',\r\n    },\r\n    {\r\n      small: '-',\r\n      shift: '_',\r\n      code: 'Minus',\r\n    },\r\n    {\r\n      small: '=',\r\n      shift: '+',\r\n      code: 'Equal',\r\n    },\r\n    {\r\n      small: 'Backspace',\r\n      shift: null,\r\n      code: 'Backspace',\r\n    },\r\n    {\r\n      small: 'Delete',\r\n      shift: null,\r\n      code: 'Delete',\r\n    },\r\n    {\r\n      small: 'Tab',\r\n      shift: null,\r\n      code: 'Tab',\r\n    },\r\n    {\r\n      small: 'q',\r\n      shift: 'Q',\r\n      code: 'KeyQ',\r\n    },\r\n    {\r\n      small: 'w',\r\n      shift: 'W',\r\n      code: 'KeyW',\r\n    },\r\n    {\r\n      small: 'e',\r\n      shift: 'E',\r\n      code: 'KeyE',\r\n    },\r\n    {\r\n      small: 'r',\r\n      shift: 'R',\r\n      code: 'KeyR',\r\n    },\r\n    {\r\n      small: 't',\r\n      shift: 'T',\r\n      code: 'KeyT',\r\n    },\r\n    {\r\n      small: 'y',\r\n      shift: 'Y',\r\n      code: 'KeyY',\r\n    },\r\n    {\r\n      small: 'u',\r\n      shift: 'U',\r\n      code: 'KeyU',\r\n    },\r\n    {\r\n      small: 'i',\r\n      shift: 'I',\r\n      code: 'KeyI',\r\n    },\r\n    {\r\n      small: 'o',\r\n      shift: 'O',\r\n      code: 'KeyO',\r\n    },\r\n    {\r\n      small: 'p',\r\n      shift: 'P',\r\n      code: 'KeyP',\r\n    },\r\n    {\r\n      small: '[',\r\n      shift: '{',\r\n      code: 'BracketLeft',\r\n    },\r\n    {\r\n      small: ']',\r\n      shift: '}',\r\n      code: 'BracketRight',\r\n    },\r\n    {\r\n      small: 'Enter',\r\n      shift: null,\r\n      code: 'Enter',\r\n    },\r\n    {\r\n      small: 'CapsLock',\r\n      shift: null,\r\n      code: 'CapsLock',\r\n    },\r\n    {\r\n      small: 'a',\r\n      shift: 'A',\r\n      code: 'KeyA',\r\n    },\r\n    {\r\n      small: 's',\r\n      shift: 'S',\r\n      code: 'KeyS',\r\n    },\r\n    {\r\n      small: 'd',\r\n      shift: 'D',\r\n      code: 'KeyD',\r\n    },\r\n    {\r\n      small: 'f',\r\n      shift: 'F',\r\n      code: 'KeyF',\r\n    },\r\n    {\r\n      small: 'g',\r\n      shift: 'G',\r\n      code: 'KeyG',\r\n    },\r\n    {\r\n      small: 'h',\r\n      shift: 'H',\r\n      code: 'KeyH',\r\n    },\r\n    {\r\n      small: 'j',\r\n      shift: 'J',\r\n      code: 'KeyJ',\r\n    },\r\n    {\r\n      small: 'k',\r\n      shift: 'K',\r\n      code: 'KeyK',\r\n    },\r\n    {\r\n      small: 'l',\r\n      shift: 'L',\r\n      code: 'KeyL',\r\n    },\r\n    {\r\n      small: ';',\r\n      shift: ':',\r\n      code: 'Semicolon',\r\n    },\r\n    {\r\n      small: \"'\",\r\n      shift: '\"',\r\n      code: 'Quote',\r\n    },\r\n    {\r\n      small: '\\\\',\r\n      shift: '|',\r\n      code: 'Backslash',\r\n    },\r\n    {\r\n      small: 'Shift',\r\n      shift: null,\r\n      code: 'ShiftLeft',\r\n    },\r\n    {\r\n      small: '<',\r\n      shift: '>',\r\n      code: 'IntlBackslash',\r\n    },\r\n    {\r\n      small: 'z',\r\n      shift: 'Z',\r\n      code: 'KeyZ',\r\n    },\r\n    {\r\n      small: 'x',\r\n      shift: 'X',\r\n      code: 'KeyX',\r\n    },\r\n    {\r\n      small: 'c',\r\n      shift: 'C',\r\n      code: 'KeyC',\r\n    },\r\n    {\r\n      small: 'v',\r\n      shift: 'V',\r\n      code: 'KeyV',\r\n    },\r\n    {\r\n      small: 'b',\r\n      shift: 'B',\r\n      code: 'KeyB',\r\n    },\r\n    {\r\n      small: 'n',\r\n      shift: 'N',\r\n      code: 'KeyN',\r\n    },\r\n    {\r\n      small: 'm',\r\n      shift: 'M',\r\n      code: 'KeyM',\r\n    },\r\n    {\r\n      small: ',',\r\n      shift: '<',\r\n      code: 'Comma',\r\n    },\r\n    {\r\n      small: '.',\r\n      shift: '>',\r\n      code: 'Period',\r\n    },\r\n    {\r\n      small: '/',\r\n      shift: '?',\r\n      code: 'Slash',\r\n    },\r\n    {\r\n      small: 'Shift',\r\n      shift: null,\r\n      code: 'ShiftRight',\r\n    },\r\n    {\r\n      small: 'Ctrl',\r\n      shift: null,\r\n      code: 'ControlLeft',\r\n    },\r\n    {\r\n      small: 'Alt',\r\n      shift: null,\r\n      code: 'AltLeft',\r\n    },\r\n    {\r\n      small: ' ',\r\n      shift: null,\r\n      code: 'Space',\r\n    },\r\n    {\r\n      small: 'Alt',\r\n      shift: null,\r\n      code: 'AltRight',\r\n    },\r\n    {\r\n      small: 'Ctrl',\r\n      shift: null,\r\n      code: 'ControlRight',\r\n    },\r\n    {\r\n      small: '&larr;',\r\n      shift: null,\r\n      code: 'ArrowLeft',\r\n    },\r\n    {\r\n      small: '&uarr;',\r\n      shift: null,\r\n      code: 'ArrowUp',\r\n    },\r\n    {\r\n      small: '&darr;',\r\n      shift: null,\r\n      code: 'ArrowDown',\r\n    },\r\n    {\r\n      small: '&rarr;',\r\n      shift: null,\r\n      code: 'ArrowRight',\r\n    },\r\n    {\r\n      small: 'Win',\r\n      shift: null,\r\n      code: 'Win',\r\n    },\r\n  ]);\n\n//# sourceURL=webpack://virtual-keyboard/./src/en.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n/* harmony import */ var _Keyboard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Keyboard.js */ \"./src/Keyboard.js\");\n\r\n\r\n\r\n\r\n\r\nconst keyOrder = [\r\n  ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Delete'],\r\n  ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backspace'],\r\n  ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Backslash', 'Enter'],\r\n  ['ShiftLeft', 'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],\r\n  ['ControlLeft', 'Win', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'],\r\n];\r\n\r\nconst lang = (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.get)('kbLang', '\"ru\"');\r\n\r\nnew _Keyboard_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](keyOrder).init(lang).generateLayout();\n\n//# sourceURL=webpack://virtual-keyboard/./src/index.js?");

/***/ }),

/***/ "./src/language.js":
/*!*************************!*\
  !*** ./src/language.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ru_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ru.js */ \"./src/ru.js\");\n/* harmony import */ var _en_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./en.js */ \"./src/en.js\");\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ ru: _ru_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], en: _en_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"] }); \n\n//# sourceURL=webpack://virtual-keyboard/./src/language.js?");

/***/ }),

/***/ "./src/ru.js":
/*!*******************!*\
  !*** ./src/ru.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([\r\n    {\r\n      small: 'CapsLock',\r\n      shift: null,\r\n      code: 'CapsLock',\r\n    },\r\n    {\r\n      small: 'ё',\r\n      shift: 'Ё',\r\n      code: 'Backquote',\r\n    },\r\n    {\r\n      small: '1',\r\n      shift: '!',\r\n      code: 'Digit1',\r\n    },\r\n    {\r\n      small: '2',\r\n      shift: '\"',\r\n      code: 'Digit2',\r\n    },\r\n    {\r\n      small: '3',\r\n      shift: '№',\r\n      code: 'Digit3',\r\n    },\r\n    {\r\n      small: '4',\r\n      shift: ';',\r\n      code: 'Digit4',\r\n    },\r\n    {\r\n      small: '5',\r\n      shift: '%',\r\n      code: 'Digit5',\r\n    },\r\n    {\r\n      small: '6',\r\n      shift: ':',\r\n      code: 'Digit6',\r\n    },\r\n    {\r\n      small: '7',\r\n      shift: '?',\r\n      code: 'Digit7',\r\n    },\r\n    {\r\n      small: '8',\r\n      shift: '*',\r\n      code: 'Digit8',\r\n    },\r\n    {\r\n      small: '9',\r\n      shift: '(',\r\n      code: 'Digit9',\r\n    },\r\n    {\r\n      small: '0',\r\n      shift: ')',\r\n      code: 'Digit0',\r\n    },\r\n    {\r\n      small: '-',\r\n      shift: '_',\r\n      code: 'Minus',\r\n    },\r\n    {\r\n      small: '=',\r\n      shift: '+',\r\n      code: 'Equal',\r\n    },\r\n    {\r\n      small: 'Backspace',\r\n      shift: null,\r\n      code: 'Backspace',\r\n    },\r\n    {\r\n      small: 'Delete',\r\n      shift: null,\r\n      code: 'Delete',\r\n    },\r\n    {\r\n      small: 'Tab',\r\n      shift: null,\r\n      code: 'Tab',\r\n    },\r\n    {\r\n      small: 'й',\r\n      shift: 'Й',\r\n      code: 'KeyQ',\r\n    },\r\n    {\r\n      small: 'ц',\r\n      shift: 'Ц',\r\n      code: 'KeyW',\r\n    },\r\n    {\r\n      small: 'у',\r\n      shift: 'У',\r\n      code: 'KeyE',\r\n    },\r\n    {\r\n      small: 'к',\r\n      shift: 'К',\r\n      code: 'KeyR',\r\n    },\r\n    {\r\n      small: 'е',\r\n      shift: 'Е',\r\n      code: 'KeyT',\r\n    },\r\n    {\r\n      small: 'н',\r\n      shift: 'Н',\r\n      code: 'KeyY',\r\n    },\r\n    {\r\n      small: 'г',\r\n      shift: 'Г',\r\n      code: 'KeyU',\r\n    },\r\n    {\r\n      small: 'ш',\r\n      shift: 'Ш',\r\n      code: 'KeyI',\r\n    },\r\n    {\r\n      small: 'щ',\r\n      shift: 'Щ',\r\n      code: 'KeyO',\r\n    },\r\n    {\r\n      small: 'з',\r\n      shift: 'З',\r\n      code: 'KeyP',\r\n    },\r\n    {\r\n      small: 'х',\r\n      shift: 'Х',\r\n      code: 'BracketLeft',\r\n    },\r\n    {\r\n      small: 'ъ',\r\n      shift: 'Ъ',\r\n      code: 'BracketRight',\r\n    },\r\n    {\r\n      small: 'Enter',\r\n      shift: null,\r\n      code: 'Enter',\r\n    },\r\n    {\r\n      small: 'ф',\r\n      shift: 'Ф',\r\n      code: 'KeyA',\r\n    },\r\n    {\r\n      small: 'ы',\r\n      shift: 'Ы',\r\n      code: 'KeyS',\r\n    },\r\n    {\r\n      small: 'в',\r\n      shift: 'В',\r\n      code: 'KeyD',\r\n    },\r\n    {\r\n      small: 'а',\r\n      shift: 'А',\r\n      code: 'KeyF',\r\n    },\r\n    {\r\n      small: 'п',\r\n      shift: 'П',\r\n      code: 'KeyG',\r\n    },\r\n    {\r\n      small: 'р',\r\n      shift: 'Р',\r\n      code: 'KeyH',\r\n    },\r\n    {\r\n      small: 'о',\r\n      shift: 'О',\r\n      code: 'KeyJ',\r\n    },\r\n    {\r\n      small: 'л',\r\n      shift: 'Л',\r\n      code: 'KeyK',\r\n    },\r\n    {\r\n      small: 'д',\r\n      shift: 'Д',\r\n      code: 'KeyL',\r\n    },\r\n    {\r\n      small: 'ж',\r\n      shift: 'Ж',\r\n      code: 'Semicolon',\r\n    },\r\n    {\r\n      small: 'э',\r\n      shift: 'Э',\r\n      code: 'Quote',\r\n    },\r\n    {\r\n      small: '\\\\',\r\n      shift: '/',\r\n      code: 'Backslash',\r\n    },\r\n    {\r\n      small: 'Shift',\r\n      shift: null,\r\n      code: 'ShiftLeft',\r\n    },\r\n    {\r\n      small: '/',\r\n      shift: '|',\r\n      code: 'IntlBackslash',\r\n    },\r\n    {\r\n      small: 'я',\r\n      shift: 'Я',\r\n      code: 'KeyZ',\r\n    },\r\n    {\r\n      small: 'ч',\r\n      shift: 'Ч',\r\n      code: 'KeyX',\r\n    },\r\n    {\r\n      small: 'с',\r\n      shift: 'С',\r\n      code: 'KeyC',\r\n    },\r\n    {\r\n      small: 'м',\r\n      shift: 'М',\r\n      code: 'KeyV',\r\n    },\r\n    {\r\n      small: 'и',\r\n      shift: 'И',\r\n      code: 'KeyB',\r\n    },\r\n    {\r\n      small: 'т',\r\n      shift: 'Т',\r\n      code: 'KeyN',\r\n    },\r\n    {\r\n      small: 'ь',\r\n      shift: 'Ь',\r\n      code: 'KeyM',\r\n    },\r\n    {\r\n      small: 'б',\r\n      shift: 'Б',\r\n      code: 'Comma',\r\n    },\r\n    {\r\n      small: 'ю',\r\n      shift: 'Ю',\r\n      code: 'Period',\r\n    },\r\n    {\r\n      small: '.',\r\n      shift: ',',\r\n      code: 'Slash',\r\n    },\r\n    {\r\n      small: 'Shift',\r\n      shift: null,\r\n      code: 'ShiftRight',\r\n    },\r\n    {\r\n      small: 'Ctrl',\r\n      shift: null,\r\n      code: 'ControlLeft',\r\n    },\r\n    {\r\n      small: 'Alt',\r\n      shift: null,\r\n      code: 'AltLeft',\r\n    },\r\n    {\r\n      small: ' ',\r\n      shift: null,\r\n      code: 'Space',\r\n    },\r\n    {\r\n      small: 'Alt',\r\n      shift: null,\r\n      code: 'AltRight',\r\n    },\r\n    {\r\n      small: 'Ctrl',\r\n      shift: null,\r\n      code: 'ControlRight',\r\n    },\r\n    {\r\n      small: '&larr;',\r\n      shift: null,\r\n      code: 'ArrowLeft',\r\n    },\r\n    {\r\n      small: '&uarr;',\r\n      shift: null,\r\n      code: 'ArrowUp',\r\n    },\r\n    {\r\n      small: '&darr;',\r\n      shift: null,\r\n      code: 'ArrowDown',\r\n    },\r\n    {\r\n      small: '&rarr;',\r\n      shift: null,\r\n      code: 'ArrowRight',\r\n    },\r\n    {\r\n      small: 'Win',\r\n      shift: null,\r\n      code: 'Win',\r\n    },\r\n  ]);\n\n//# sourceURL=webpack://virtual-keyboard/./src/ru.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"del\": () => (/* binding */ del),\n/* harmony export */   \"get\": () => (/* binding */ get),\n/* harmony export */   \"set\": () => (/* binding */ set)\n/* harmony export */ });\nfunction set(name, value) {\r\n    window.localStorage.setItem(name, JSON.stringify(value));\r\n}\r\n  \r\nfunction get(name, subst = null) {\r\n    return JSON.parse(window.localStorage.getItem(name) || subst);\r\n}\r\n  \r\nfunction del(name) {\r\n    localStorage.removeItem(name);\r\n} \n\n//# sourceURL=webpack://virtual-keyboard/./src/storage.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;