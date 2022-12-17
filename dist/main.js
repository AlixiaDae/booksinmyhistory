/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n    margin: 0;\r\n    padding: 0;\r\n    min-height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\nnav {\r\n    padding: 15px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    box-shadow: -2px -2px 2px rgb(189, 188, 188) inset;\r\n}\r\n\r\nnav > div {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 15px;\r\n}\r\n\r\nnav > div > :first-child {\r\n    height: 50px;\r\n}\r\n\r\nh1 {\r\n    font-size: 40px;\r\n    margin: 0;\r\n    width: 300px;\r\n}\r\n\r\n.main-body { \r\n    background-color: rgb(252, 242, 228);\r\n    padding: 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    padding: 20px;\r\n    flex-grow: 1;\r\n    position: relative;\r\n    /* align-items: center; */\r\n}\r\n\r\n.sub-header-image {\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    height: 500px;\r\n}\r\n\r\n#add-book {\r\n    height: 45px;\r\n    width: 130px;\r\n    border-style: none;\r\n    border-radius: 10px;\r\n    background-color: red;\r\n    color: whitesmoke;\r\n    font-size: 20px;\r\n    box-shadow: 2px 2px 1px rgb(202, 193, 179);\r\n}\r\n\r\nform {\r\n    display: flex;\r\n    text-align: center;\r\n    justify-content: center;\r\n    height: 0;\r\n    transition: height 1s ease;\r\n    overflow: hidden;\r\n    background-color: rgb(226, 219, 209);\r\n    position: absolute;\r\n    top: 80px;\r\n    right: 0;\r\n    left: 0;\r\n    z-index: 2;\r\n}\r\n\r\nlegend {\r\n    font-size: 25px;\r\n}\r\n\r\nfieldset {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 250px;\r\n    height: 190px;\r\n    align-items: center;\r\n    gap: 5px;\r\n    padding: 0px 10px 15px 10px;\r\n    background-color: rgb(252, 242, 228);\r\n    border-radius: 10px;\r\n}\r\n\r\nfieldset > :not(:nth-child(4)) {\r\n    flex-direction: column;\r\n}\r\n\r\nfieldset > :not(:nth-child(4)),\r\nfieldset > :nth-child(4),\r\nfieldset > :nth-child(4) > div {\r\n    display: flex;\r\n    gap: 5px;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\nfieldset > :nth-child(4) {\r\n    height: 30px;\r\n}\r\n\r\nfieldset > :last-child > div {\r\n    margin-top: 5px;\r\n}\r\n\r\ninput[type='radio'] {\r\n    margin: 0;\r\n}\r\n\r\n#submit-new-book {\r\n    height: 25px;\r\n}\r\n\r\nform.active {\r\n    height: 220px;\r\n}\r\n\r\n.shelf {\r\n    display: grid;\r\n    grid-template-columns: repeat(5,212px);\r\n    column-gap: 10px;\r\n    row-gap: 10px;\r\n    grid-auto-flow: row;\r\n    margin-top: 5px;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.bookcard {\r\n    height: 250px;\r\n    width: 200px;\r\n    border: 1px solid;\r\n    border-radius: 10px;\r\n    padding: 5px;\r\n    text-align: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    position: relative;\r\n}\r\n\r\n.bookcard > p {\r\n    margin: 5px;\r\n}\r\n\r\n#remove-book {\r\n    position: absolute;\r\n    bottom: 50%;\r\n    right: 35%;\r\n    padding: 5px;\r\n    text-align: center;\r\n}\r\n\r\n#add-book:hover {\r\n    background-color: rgb(211, 4, 4);\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,iBAAiB;IACjB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,kDAAkD;AACtD;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,SAAS;IACT,YAAY;AAChB;;AAEA;IACI,oCAAoC;IACpC,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,yBAAyB;AAC7B;;AAEA;IACI,2BAA2B;IAC3B,4BAA4B;IAC5B,sBAAsB;IACtB,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;IACnB,qBAAqB;IACrB,iBAAiB;IACjB,eAAe;IACf,0CAA0C;AAC9C;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,uBAAuB;IACvB,SAAS;IACT,0BAA0B;IAC1B,gBAAgB;IAChB,oCAAoC;IACpC,kBAAkB;IAClB,SAAS;IACT,QAAQ;IACR,OAAO;IACP,UAAU;AACd;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,QAAQ;IACR,2BAA2B;IAC3B,oCAAoC;IACpC,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;;;IAGI,aAAa;IACb,QAAQ;IACR,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,iBAAiB;IACjB,mBAAmB;IACnB,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,kBAAkB;AACtB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,UAAU;IACV,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,gCAAgC;AACpC","sourcesContent":["body {\r\n    margin: 0;\r\n    padding: 0;\r\n    min-height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\nnav {\r\n    padding: 15px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    box-shadow: -2px -2px 2px rgb(189, 188, 188) inset;\r\n}\r\n\r\nnav > div {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 15px;\r\n}\r\n\r\nnav > div > :first-child {\r\n    height: 50px;\r\n}\r\n\r\nh1 {\r\n    font-size: 40px;\r\n    margin: 0;\r\n    width: 300px;\r\n}\r\n\r\n.main-body { \r\n    background-color: rgb(252, 242, 228);\r\n    padding: 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    padding: 20px;\r\n    flex-grow: 1;\r\n    position: relative;\r\n    /* align-items: center; */\r\n}\r\n\r\n.sub-header-image {\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    height: 500px;\r\n}\r\n\r\n#add-book {\r\n    height: 45px;\r\n    width: 130px;\r\n    border-style: none;\r\n    border-radius: 10px;\r\n    background-color: red;\r\n    color: whitesmoke;\r\n    font-size: 20px;\r\n    box-shadow: 2px 2px 1px rgb(202, 193, 179);\r\n}\r\n\r\nform {\r\n    display: flex;\r\n    text-align: center;\r\n    justify-content: center;\r\n    height: 0;\r\n    transition: height 1s ease;\r\n    overflow: hidden;\r\n    background-color: rgb(226, 219, 209);\r\n    position: absolute;\r\n    top: 80px;\r\n    right: 0;\r\n    left: 0;\r\n    z-index: 2;\r\n}\r\n\r\nlegend {\r\n    font-size: 25px;\r\n}\r\n\r\nfieldset {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 250px;\r\n    height: 190px;\r\n    align-items: center;\r\n    gap: 5px;\r\n    padding: 0px 10px 15px 10px;\r\n    background-color: rgb(252, 242, 228);\r\n    border-radius: 10px;\r\n}\r\n\r\nfieldset > :not(:nth-child(4)) {\r\n    flex-direction: column;\r\n}\r\n\r\nfieldset > :not(:nth-child(4)),\r\nfieldset > :nth-child(4),\r\nfieldset > :nth-child(4) > div {\r\n    display: flex;\r\n    gap: 5px;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\nfieldset > :nth-child(4) {\r\n    height: 30px;\r\n}\r\n\r\nfieldset > :last-child > div {\r\n    margin-top: 5px;\r\n}\r\n\r\ninput[type='radio'] {\r\n    margin: 0;\r\n}\r\n\r\n#submit-new-book {\r\n    height: 25px;\r\n}\r\n\r\nform.active {\r\n    height: 220px;\r\n}\r\n\r\n.shelf {\r\n    display: grid;\r\n    grid-template-columns: repeat(5,212px);\r\n    column-gap: 10px;\r\n    row-gap: 10px;\r\n    grid-auto-flow: row;\r\n    margin-top: 5px;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.bookcard {\r\n    height: 250px;\r\n    width: 200px;\r\n    border: 1px solid;\r\n    border-radius: 10px;\r\n    padding: 5px;\r\n    text-align: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    position: relative;\r\n}\r\n\r\n.bookcard > p {\r\n    margin: 5px;\r\n}\r\n\r\n#remove-book {\r\n    position: absolute;\r\n    bottom: 50%;\r\n    right: 35%;\r\n    padding: 5px;\r\n    text-align: center;\r\n}\r\n\r\n#add-book:hover {\r\n    background-color: rgb(211, 4, 4);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOM/dom.js":
/*!************************!*\
  !*** ./src/DOM/dom.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");
/* harmony import */ var _library_modules_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../library modules/lib */ "./src/library modules/lib.js");
/* harmony import */ var _library_modules_Book__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../library modules/Book */ "./src/library modules/Book.js");
/* harmony import */ var _images_open_book_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/open-book.png */ "./src/images/open-book.png");
/* harmony import */ var _images_inaki_del_olmo_NIJuEQw0RKg_unsplash_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/inaki-del-olmo-NIJuEQw0RKg-unsplash.jpg */ "./src/images/inaki-del-olmo-NIJuEQw0RKg-unsplash.jpg");






const DOM = (() => {
    let library = new _library_modules_lib__WEBPACK_IMPORTED_MODULE_1__["default"]()
    let bookOne = new _library_modules_Book__WEBPACK_IMPORTED_MODULE_2__["default"](`Harry Potter and the Philosopher's Stone`, 'J.K. Rowling', 'physical')
    let bookTwo = new _library_modules_Book__WEBPACK_IMPORTED_MODULE_2__["default"]('Graceling', 'Kristin Cashore', 'physical')
    let bookThree = new _library_modules_Book__WEBPACK_IMPORTED_MODULE_2__["default"]('Magyk', 'Angie Sage', 'physical')

    library.addBook(bookOne)
    library.addBook(bookTwo)
    library.addBook(bookThree)
    // console.log(library.constainsBook(bookThree))
    // library.getBooks()

    const navBar = document.createElement('nav')
    document.body.appendChild(navBar)

    const logoWrapper = document.createElement('div')
    navBar.appendChild(logoWrapper)

    const logo = document.createElement('img')
    logo.src = _images_open_book_png__WEBPACK_IMPORTED_MODULE_3__
    logoWrapper.appendChild(logo)

    const siteName = document.createElement('h1')
    siteName.textContent = 'My Alexandria'
    logoWrapper.appendChild(siteName)

    const subHeaderImage = document.createElement('img')
    subHeaderImage.src = _images_inaki_del_olmo_NIJuEQw0RKg_unsplash_jpg__WEBPACK_IMPORTED_MODULE_4__
    subHeaderImage.classList.add('sub-header-image')
    document.body.appendChild(subHeaderImage)

    //main body to append content
    const mainBody = document.createElement('div')
    mainBody.classList.add('main-body')
    document.body.appendChild(mainBody)

    const addBookBtn = document.createElement('button')
    addBookBtn.id = 'add-book'
    addBookBtn.textContent = '+ Add Book'
    mainBody.appendChild(addBookBtn)

    //Form for adding new books
    const addBookForm = document.createElement('form')
    mainBody.appendChild(addBookForm)

    const addBookField = document.createElement('fieldset')
    addBookForm.appendChild(addBookField)

    const addBookLegend = document.createElement('legend')
    addBookLegend.textContent = 'New Book'
    addBookField.appendChild(addBookLegend)

    const addBookTitleWrapper = document.createElement('div')
    addBookField.appendChild(addBookTitleWrapper)

    const addBookTitleLabel = document.createElement('label')
    addBookTitleLabel.setAttribute('for', 'title')
    addBookTitleLabel.textContent = 'Title:'
    addBookTitleWrapper.appendChild(addBookTitleLabel)

    const addBookTitle = document.createElement('input')
    addBookTitle.name = 'name'
    addBookTitle.id = 'name'
    addBookTitleWrapper.appendChild(addBookTitle)
    
    const addBookAuthorWrapper = document.createElement('div')
    addBookField.appendChild(addBookAuthorWrapper)

    const addBookAuthorLabel = document.createElement('label')
    addBookAuthorLabel.setAttribute('for', 'author')
    addBookAuthorLabel.textContent = 'Author:'
    addBookAuthorWrapper.appendChild(addBookAuthorLabel)

    const addBookAuthor = document.createElement('input')
    addBookAuthor.name = 'author'
    addBookAuthor.id = 'author'
    addBookAuthorWrapper.appendChild(addBookAuthor)

    const addBookMediumWrapper = document.createElement('div')
    addBookField.appendChild(addBookMediumWrapper)

    const physicalRadioWrapper = document.createElement('div')
    addBookMediumWrapper.appendChild(physicalRadioWrapper)

    const physicalRadio = document.createElement('input')
    physicalRadio.setAttribute('type', 'radio')
    physicalRadio.name = 'medium'
    physicalRadio.id = 'physical'
    physicalRadioWrapper.appendChild(physicalRadio)

    const physicalRadioLabel = document.createElement('label')
    physicalRadioLabel.setAttribute('for','physical')
    physicalRadioLabel.textContent = 'Physical Copy'
    physicalRadioWrapper.appendChild(physicalRadioLabel)

    const onlineRadioWrapper = document.createElement('div')
    addBookMediumWrapper.appendChild(onlineRadioWrapper)

    const onlineRadio = document.createElement('input')
    onlineRadio.setAttribute('type', 'radio')
    onlineRadio.name = 'medium'
    onlineRadio.id = 'online'
    onlineRadioWrapper.appendChild(onlineRadio)

    const onlineRadioLabel = document.createElement('label')
    onlineRadioLabel.setAttribute('for', 'online')
    onlineRadioLabel.textContent = 'Online Copy'
    onlineRadioWrapper.appendChild(onlineRadioLabel)

    const addBookSubmitBtn = document.createElement('button')
    addBookSubmitBtn.id = 'submit-new-book'
    addBookSubmitBtn.textContent = 'Add new book'
    addBookField.appendChild(addBookSubmitBtn)

    addBookSubmitBtn.addEventListener('click', (e) => {
        e.preventDefault()
        const title = addBookTitle
        const author = addBookAuthor
        let medium  = ''
        if(physicalRadio.checked) {
            medium = physicalRadio
        } else {
            medium = onlineRadio
        }
        if(title.value === '') return
        if(author.value === '') {
            author.value = 'Unknown'
        }
        const newBook = new _library_modules_Book__WEBPACK_IMPORTED_MODULE_2__["default"](title.value,author.value, medium.id)
        if(library.constainsBook(newBook)) return
        library.addBook(newBook)
        console.log(medium.id)
        shelf.textContent = ''
        title.value = ''
        author.value = ''
        physicalRadio.checked = false
        onlineRadio.checked = false
        addBookForm.classList.remove('active')
        createBookCard()
    })


    addBookBtn.addEventListener('click', showForm)

    const shelf = document.createElement('div')
    shelf.classList.add('shelf')
    mainBody.appendChild(shelf)

    //Creates bookCards for each book
    function createBookCard() {
    for(let i = 0; i < library.getBooks().length; i++) {
        const bookCard = document.createElement('div')
        bookCard.classList.add('bookcard')
        shelf.appendChild(bookCard)

        const bookTitle = document.createElement('p')
        bookTitle.textContent = library.getBooks()[i].title
        bookCard.appendChild(bookTitle)

        const bookAuthor = document.createElement('p')
        if(library.getBooks()[i].author === null) {
            bookAuthor.textContent = 'Unknown'
        } else {
            bookAuthor.textContent = library.getBooks()[i].author
        }
        bookCard.appendChild(bookAuthor)

        const bookRemoveBtn = document.createElement('button')
        bookRemoveBtn.style.display = 'none'
        bookRemoveBtn.id = 'remove-book'
        bookRemoveBtn.textContent = 'Remove'
        bookCard.appendChild(bookRemoveBtn)

        bookCard.addEventListener('mouseenter', () => {
            bookRemoveBtn.style.display = 'block'
        })

        bookCard.addEventListener('mouseleave', () => {
            bookRemoveBtn.style.display = 'none'
        })
        
        const bookName = library.getBooks()[i].title

        bookRemoveBtn.addEventListener('click', () => {
            bookCard.remove()
            library.removeBook(bookName)
        })

    }}

    function showForm() {
        addBookForm.classList.toggle('active')
    }

    createBookCard()

    return mainBody
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOM);

/***/ }),

/***/ "./src/library modules/Book.js":
/*!*************************************!*\
  !*** ./src/library modules/Book.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Book)
/* harmony export */ });
class Book {
    constructor(title, author, medium) {
        this.title = title
        this.author = author
        this.medium = medium
    }

    getName() {
        return this.title
    }
}

/***/ }),

/***/ "./src/library modules/lib.js":
/*!************************************!*\
  !*** ./src/library modules/lib.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Library)
/* harmony export */ });
class Library {
    constructor() {
        this.books = []
    }

    getBooks() {
        return this.books
    }

    constainsBook(newBook) {
        return this.books.some(book => book.title === newBook.title)
    }

    addBook(newBook) {
        if(this.books.find(book => book.title === newBook.title)) return
        this.books.push(newBook)
    }

    removeBook(bookTitle) {
        const bookToDelete = this.books.find(book => book.title === bookTitle)
        return this.books.splice(this.books.indexOf(bookToDelete), 1)
    }

}

/***/ }),

/***/ "./src/images/inaki-del-olmo-NIJuEQw0RKg-unsplash.jpg":
/*!************************************************************!*\
  !*** ./src/images/inaki-del-olmo-NIJuEQw0RKg-unsplash.jpg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "63bc4066297bc95c726d.jpg";

/***/ }),

/***/ "./src/images/open-book.png":
/*!**********************************!*\
  !*** ./src/images/open-book.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b195dc9ed025af924502.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DOM_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM/dom */ "./src/DOM/dom.js");



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw2REFBSTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwrQkFBK0I7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLGlFQUFlOzs7Ozs7Ozs7Ozs7OztBQzdNQTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1ZlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7OztBQ0E0QjtBQUM1QiIsInNvdXJjZXMiOlsid2VicGFjazovL2Jvb2tzLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9ib29rcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYm9va3MvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9ib29rcy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9ib29rcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9ib29rcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYm9va3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYm9va3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYm9va3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9ib29rcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2Jvb2tzLy4vc3JjL0RPTS9kb20uanMiLCJ3ZWJwYWNrOi8vYm9va3MvLi9zcmMvbGlicmFyeSBtb2R1bGVzL0Jvb2suanMiLCJ3ZWJwYWNrOi8vYm9va3MvLi9zcmMvbGlicmFyeSBtb2R1bGVzL2xpYi5qcyIsIndlYnBhY2s6Ly9ib29rcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ib29rcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9ib29rcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYm9va3Mvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9ib29rcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Jvb2tzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYm9va3Mvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYm9va3Mvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2Jvb2tzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbm5hdiB7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYm94LXNoYWRvdzogLTJweCAtMnB4IDJweCByZ2IoMTg5LCAxODgsIDE4OCkgaW5zZXQ7XFxyXFxufVxcclxcblxcclxcbm5hdiA+IGRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxubmF2ID4gZGl2ID4gOmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWJvZHkgeyBcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MiwgMjQyLCAyMjgpO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4uc3ViLWhlYWRlci1pbWFnZSB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgaGVpZ2h0OiA1MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1ib29rIHtcXHJcXG4gICAgaGVpZ2h0OiA0NXB4O1xcclxcbiAgICB3aWR0aDogMTMwcHg7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDFweCByZ2IoMjAyLCAxOTMsIDE3OSk7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDA7XFxyXFxuICAgIHRyYW5zaXRpb246IGhlaWdodCAxcyBlYXNlO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI2LCAyMTksIDIwOSk7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA4MHB4O1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG59XFxyXFxuXFxyXFxubGVnZW5kIHtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5maWVsZHNldCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiAyNTBweDtcXHJcXG4gICAgaGVpZ2h0OiAxOTBweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDBweCAxMHB4IDE1cHggMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MiwgMjQyLCAyMjgpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5maWVsZHNldCA+IDpub3QoOm50aC1jaGlsZCg0KSkge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG5maWVsZHNldCA+IDpub3QoOm50aC1jaGlsZCg0KSksXFxyXFxuZmllbGRzZXQgPiA6bnRoLWNoaWxkKDQpLFxcclxcbmZpZWxkc2V0ID4gOm50aC1jaGlsZCg0KSA+IGRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZmllbGRzZXQgPiA6bnRoLWNoaWxkKDQpIHtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5maWVsZHNldCA+IDpsYXN0LWNoaWxkID4gZGl2IHtcXHJcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPSdyYWRpbyddIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jc3VibWl0LW5ldy1ib29rIHtcXHJcXG4gICAgaGVpZ2h0OiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtLmFjdGl2ZSB7XFxyXFxuICAgIGhlaWdodDogMjIwcHg7XFxyXFxufVxcclxcblxcclxcbi5zaGVsZiB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsMjEycHgpO1xcclxcbiAgICBjb2x1bW4tZ2FwOiAxMHB4O1xcclxcbiAgICByb3ctZ2FwOiAxMHB4O1xcclxcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xcclxcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9va2NhcmQge1xcclxcbiAgICBoZWlnaHQ6IDI1MHB4O1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5ib29rY2FyZCA+IHAge1xcclxcbiAgICBtYXJnaW46IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuI3JlbW92ZS1ib29rIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IDUwJTtcXHJcXG4gICAgcmlnaHQ6IDM1JTtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNhZGQtYm9vazpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTEsIDQsIDQpO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixrREFBa0Q7QUFDdEQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsU0FBUztJQUNULFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsVUFBVTtJQUNWLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsU0FBUztJQUNULDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUNSLE9BQU87SUFDUCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1IsMkJBQTJCO0lBQzNCLG9DQUFvQztJQUNwQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7OztJQUdJLGFBQWE7SUFDYixRQUFRO0lBQ1IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBib3gtc2hhZG93OiAtMnB4IC0ycHggMnB4IHJnYigxODksIDE4OCwgMTg4KSBpbnNldDtcXHJcXG59XFxyXFxuXFxyXFxubmF2ID4gZGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgPiBkaXYgPiA6Zmlyc3QtY2hpbGQge1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHdpZHRoOiAzMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tYm9keSB7IFxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUyLCAyNDIsIDIyOCk7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxyXFxufVxcclxcblxcclxcbi5zdWItaGVhZGVyLWltYWdlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBoZWlnaHQ6IDUwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLWJvb2sge1xcclxcbiAgICBoZWlnaHQ6IDQ1cHg7XFxyXFxuICAgIHdpZHRoOiAxMzBweDtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMXB4IHJnYigyMDIsIDE5MywgMTc5KTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogMDtcXHJcXG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDFzIGVhc2U7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYsIDIxOSwgMjA5KTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDgwcHg7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcbn1cXHJcXG5cXHJcXG5sZWdlbmQge1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbmZpZWxkc2V0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgd2lkdGg6IDI1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDE5MHB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG4gICAgcGFkZGluZzogMHB4IDEwcHggMTVweCAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUyLCAyNDIsIDIyOCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbmZpZWxkc2V0ID4gOm5vdCg6bnRoLWNoaWxkKDQpKSB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbmZpZWxkc2V0ID4gOm5vdCg6bnRoLWNoaWxkKDQpKSxcXHJcXG5maWVsZHNldCA+IDpudGgtY2hpbGQoNCksXFxyXFxuZmllbGRzZXQgPiA6bnRoLWNoaWxkKDQpID4gZGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5maWVsZHNldCA+IDpudGgtY2hpbGQoNCkge1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbmZpZWxkc2V0ID4gOmxhc3QtY2hpbGQgPiBkaXYge1xcclxcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9J3JhZGlvJ10ge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbiNzdWJtaXQtbmV3LWJvb2sge1xcclxcbiAgICBoZWlnaHQ6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbmZvcm0uYWN0aXZlIHtcXHJcXG4gICAgaGVpZ2h0OiAyMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoZWxmIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwyMTJweCk7XFxyXFxuICAgIGNvbHVtbi1nYXA6IDEwcHg7XFxyXFxuICAgIHJvdy1nYXA6IDEwcHg7XFxyXFxuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XFxyXFxuICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ib29rY2FyZCB7XFxyXFxuICAgIGhlaWdodDogMjUwcHg7XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvb2tjYXJkID4gcCB7XFxyXFxuICAgIG1hcmdpbjogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcmVtb3ZlLWJvb2sge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvdHRvbTogNTAlO1xcclxcbiAgICByaWdodDogMzUlO1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1ib29rOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMSwgNCwgNCk7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi4vc3R5bGUuY3NzJ1xyXG5pbXBvcnQgTGlicmFyeSBmcm9tICcuLi9saWJyYXJ5IG1vZHVsZXMvbGliJ1xyXG5pbXBvcnQgQm9vayBmcm9tICcuLi9saWJyYXJ5IG1vZHVsZXMvQm9vaydcclxuaW1wb3J0IGJvb2tMb2dvIGZyb20gJy4uL2ltYWdlcy9vcGVuLWJvb2sucG5nJ1xyXG5pbXBvcnQgYm9va0JhY2tncm91bmQgZnJvbSAnLi4vaW1hZ2VzL2luYWtpLWRlbC1vbG1vLU5JSnVFUXcwUktnLXVuc3BsYXNoLmpwZydcclxuXHJcbmNvbnN0IERPTSA9ICgoKSA9PiB7XHJcbiAgICBsZXQgbGlicmFyeSA9IG5ldyBMaWJyYXJ5KClcclxuICAgIGxldCBib29rT25lID0gbmV3IEJvb2soYEhhcnJ5IFBvdHRlciBhbmQgdGhlIFBoaWxvc29waGVyJ3MgU3RvbmVgLCAnSi5LLiBSb3dsaW5nJywgJ3BoeXNpY2FsJylcclxuICAgIGxldCBib29rVHdvID0gbmV3IEJvb2soJ0dyYWNlbGluZycsICdLcmlzdGluIENhc2hvcmUnLCAncGh5c2ljYWwnKVxyXG4gICAgbGV0IGJvb2tUaHJlZSA9IG5ldyBCb29rKCdNYWd5aycsICdBbmdpZSBTYWdlJywgJ3BoeXNpY2FsJylcclxuXHJcbiAgICBsaWJyYXJ5LmFkZEJvb2soYm9va09uZSlcclxuICAgIGxpYnJhcnkuYWRkQm9vayhib29rVHdvKVxyXG4gICAgbGlicmFyeS5hZGRCb29rKGJvb2tUaHJlZSlcclxuICAgIC8vIGNvbnNvbGUubG9nKGxpYnJhcnkuY29uc3RhaW5zQm9vayhib29rVGhyZWUpKVxyXG4gICAgLy8gbGlicmFyeS5nZXRCb29rcygpXHJcblxyXG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2JylcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobmF2QmFyKVxyXG5cclxuICAgIGNvbnN0IGxvZ29XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIG5hdkJhci5hcHBlbmRDaGlsZChsb2dvV3JhcHBlcilcclxuXHJcbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgIGxvZ28uc3JjID0gYm9va0xvZ29cclxuICAgIGxvZ29XcmFwcGVyLmFwcGVuZENoaWxkKGxvZ28pXHJcblxyXG4gICAgY29uc3Qgc2l0ZU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXHJcbiAgICBzaXRlTmFtZS50ZXh0Q29udGVudCA9ICdNeSBBbGV4YW5kcmlhJ1xyXG4gICAgbG9nb1dyYXBwZXIuYXBwZW5kQ2hpbGQoc2l0ZU5hbWUpXHJcblxyXG4gICAgY29uc3Qgc3ViSGVhZGVySW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgc3ViSGVhZGVySW1hZ2Uuc3JjID0gYm9va0JhY2tncm91bmRcclxuICAgIHN1YkhlYWRlckltYWdlLmNsYXNzTGlzdC5hZGQoJ3N1Yi1oZWFkZXItaW1hZ2UnKVxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdWJIZWFkZXJJbWFnZSlcclxuXHJcbiAgICAvL21haW4gYm9keSB0byBhcHBlbmQgY29udGVudFxyXG4gICAgY29uc3QgbWFpbkJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgbWFpbkJvZHkuY2xhc3NMaXN0LmFkZCgnbWFpbi1ib2R5JylcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbkJvZHkpXHJcblxyXG4gICAgY29uc3QgYWRkQm9va0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICBhZGRCb29rQnRuLmlkID0gJ2FkZC1ib29rJ1xyXG4gICAgYWRkQm9va0J0bi50ZXh0Q29udGVudCA9ICcrIEFkZCBCb29rJ1xyXG4gICAgbWFpbkJvZHkuYXBwZW5kQ2hpbGQoYWRkQm9va0J0bilcclxuXHJcbiAgICAvL0Zvcm0gZm9yIGFkZGluZyBuZXcgYm9va3NcclxuICAgIGNvbnN0IGFkZEJvb2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXHJcbiAgICBtYWluQm9keS5hcHBlbmRDaGlsZChhZGRCb29rRm9ybSlcclxuXHJcbiAgICBjb25zdCBhZGRCb29rRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpXHJcbiAgICBhZGRCb29rRm9ybS5hcHBlbmRDaGlsZChhZGRCb29rRmllbGQpXHJcblxyXG4gICAgY29uc3QgYWRkQm9va0xlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xlZ2VuZCcpXHJcbiAgICBhZGRCb29rTGVnZW5kLnRleHRDb250ZW50ID0gJ05ldyBCb29rJ1xyXG4gICAgYWRkQm9va0ZpZWxkLmFwcGVuZENoaWxkKGFkZEJvb2tMZWdlbmQpXHJcblxyXG4gICAgY29uc3QgYWRkQm9va1RpdGxlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBhZGRCb29rRmllbGQuYXBwZW5kQ2hpbGQoYWRkQm9va1RpdGxlV3JhcHBlcilcclxuXHJcbiAgICBjb25zdCBhZGRCb29rVGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcclxuICAgIGFkZEJvb2tUaXRsZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RpdGxlJylcclxuICAgIGFkZEJvb2tUaXRsZUxhYmVsLnRleHRDb250ZW50ID0gJ1RpdGxlOidcclxuICAgIGFkZEJvb2tUaXRsZVdyYXBwZXIuYXBwZW5kQ2hpbGQoYWRkQm9va1RpdGxlTGFiZWwpXHJcblxyXG4gICAgY29uc3QgYWRkQm9va1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgYWRkQm9va1RpdGxlLm5hbWUgPSAnbmFtZSdcclxuICAgIGFkZEJvb2tUaXRsZS5pZCA9ICduYW1lJ1xyXG4gICAgYWRkQm9va1RpdGxlV3JhcHBlci5hcHBlbmRDaGlsZChhZGRCb29rVGl0bGUpXHJcbiAgICBcclxuICAgIGNvbnN0IGFkZEJvb2tBdXRob3JXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGFkZEJvb2tGaWVsZC5hcHBlbmRDaGlsZChhZGRCb29rQXV0aG9yV3JhcHBlcilcclxuXHJcbiAgICBjb25zdCBhZGRCb29rQXV0aG9yTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXHJcbiAgICBhZGRCb29rQXV0aG9yTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnYXV0aG9yJylcclxuICAgIGFkZEJvb2tBdXRob3JMYWJlbC50ZXh0Q29udGVudCA9ICdBdXRob3I6J1xyXG4gICAgYWRkQm9va0F1dGhvcldyYXBwZXIuYXBwZW5kQ2hpbGQoYWRkQm9va0F1dGhvckxhYmVsKVxyXG5cclxuICAgIGNvbnN0IGFkZEJvb2tBdXRob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICBhZGRCb29rQXV0aG9yLm5hbWUgPSAnYXV0aG9yJ1xyXG4gICAgYWRkQm9va0F1dGhvci5pZCA9ICdhdXRob3InXHJcbiAgICBhZGRCb29rQXV0aG9yV3JhcHBlci5hcHBlbmRDaGlsZChhZGRCb29rQXV0aG9yKVxyXG5cclxuICAgIGNvbnN0IGFkZEJvb2tNZWRpdW1XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGFkZEJvb2tGaWVsZC5hcHBlbmRDaGlsZChhZGRCb29rTWVkaXVtV3JhcHBlcilcclxuXHJcbiAgICBjb25zdCBwaHlzaWNhbFJhZGlvV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBhZGRCb29rTWVkaXVtV3JhcHBlci5hcHBlbmRDaGlsZChwaHlzaWNhbFJhZGlvV3JhcHBlcilcclxuXHJcbiAgICBjb25zdCBwaHlzaWNhbFJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgcGh5c2ljYWxSYWRpby5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKVxyXG4gICAgcGh5c2ljYWxSYWRpby5uYW1lID0gJ21lZGl1bSdcclxuICAgIHBoeXNpY2FsUmFkaW8uaWQgPSAncGh5c2ljYWwnXHJcbiAgICBwaHlzaWNhbFJhZGlvV3JhcHBlci5hcHBlbmRDaGlsZChwaHlzaWNhbFJhZGlvKVxyXG5cclxuICAgIGNvbnN0IHBoeXNpY2FsUmFkaW9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcclxuICAgIHBoeXNpY2FsUmFkaW9MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ3BoeXNpY2FsJylcclxuICAgIHBoeXNpY2FsUmFkaW9MYWJlbC50ZXh0Q29udGVudCA9ICdQaHlzaWNhbCBDb3B5J1xyXG4gICAgcGh5c2ljYWxSYWRpb1dyYXBwZXIuYXBwZW5kQ2hpbGQocGh5c2ljYWxSYWRpb0xhYmVsKVxyXG5cclxuICAgIGNvbnN0IG9ubGluZVJhZGlvV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBhZGRCb29rTWVkaXVtV3JhcHBlci5hcHBlbmRDaGlsZChvbmxpbmVSYWRpb1dyYXBwZXIpXHJcblxyXG4gICAgY29uc3Qgb25saW5lUmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICBvbmxpbmVSYWRpby5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKVxyXG4gICAgb25saW5lUmFkaW8ubmFtZSA9ICdtZWRpdW0nXHJcbiAgICBvbmxpbmVSYWRpby5pZCA9ICdvbmxpbmUnXHJcbiAgICBvbmxpbmVSYWRpb1dyYXBwZXIuYXBwZW5kQ2hpbGQob25saW5lUmFkaW8pXHJcblxyXG4gICAgY29uc3Qgb25saW5lUmFkaW9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcclxuICAgIG9ubGluZVJhZGlvTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnb25saW5lJylcclxuICAgIG9ubGluZVJhZGlvTGFiZWwudGV4dENvbnRlbnQgPSAnT25saW5lIENvcHknXHJcbiAgICBvbmxpbmVSYWRpb1dyYXBwZXIuYXBwZW5kQ2hpbGQob25saW5lUmFkaW9MYWJlbClcclxuXHJcbiAgICBjb25zdCBhZGRCb29rU3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgIGFkZEJvb2tTdWJtaXRCdG4uaWQgPSAnc3VibWl0LW5ldy1ib29rJ1xyXG4gICAgYWRkQm9va1N1Ym1pdEJ0bi50ZXh0Q29udGVudCA9ICdBZGQgbmV3IGJvb2snXHJcbiAgICBhZGRCb29rRmllbGQuYXBwZW5kQ2hpbGQoYWRkQm9va1N1Ym1pdEJ0bilcclxuXHJcbiAgICBhZGRCb29rU3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBjb25zdCB0aXRsZSA9IGFkZEJvb2tUaXRsZVxyXG4gICAgICAgIGNvbnN0IGF1dGhvciA9IGFkZEJvb2tBdXRob3JcclxuICAgICAgICBsZXQgbWVkaXVtICA9ICcnXHJcbiAgICAgICAgaWYocGh5c2ljYWxSYWRpby5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgIG1lZGl1bSA9IHBoeXNpY2FsUmFkaW9cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtZWRpdW0gPSBvbmxpbmVSYWRpb1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aXRsZS52YWx1ZSA9PT0gJycpIHJldHVyblxyXG4gICAgICAgIGlmKGF1dGhvci52YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgYXV0aG9yLnZhbHVlID0gJ1Vua25vd24nXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG5ld0Jvb2sgPSBuZXcgQm9vayh0aXRsZS52YWx1ZSxhdXRob3IudmFsdWUsIG1lZGl1bS5pZClcclxuICAgICAgICBpZihsaWJyYXJ5LmNvbnN0YWluc0Jvb2sobmV3Qm9vaykpIHJldHVyblxyXG4gICAgICAgIGxpYnJhcnkuYWRkQm9vayhuZXdCb29rKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKG1lZGl1bS5pZClcclxuICAgICAgICBzaGVsZi50ZXh0Q29udGVudCA9ICcnXHJcbiAgICAgICAgdGl0bGUudmFsdWUgPSAnJ1xyXG4gICAgICAgIGF1dGhvci52YWx1ZSA9ICcnXHJcbiAgICAgICAgcGh5c2ljYWxSYWRpby5jaGVja2VkID0gZmFsc2VcclxuICAgICAgICBvbmxpbmVSYWRpby5jaGVja2VkID0gZmFsc2VcclxuICAgICAgICBhZGRCb29rRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgICAgIGNyZWF0ZUJvb2tDYXJkKClcclxuICAgIH0pXHJcblxyXG5cclxuICAgIGFkZEJvb2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93Rm9ybSlcclxuXHJcbiAgICBjb25zdCBzaGVsZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBzaGVsZi5jbGFzc0xpc3QuYWRkKCdzaGVsZicpXHJcbiAgICBtYWluQm9keS5hcHBlbmRDaGlsZChzaGVsZilcclxuXHJcbiAgICAvL0NyZWF0ZXMgYm9va0NhcmRzIGZvciBlYWNoIGJvb2tcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUJvb2tDYXJkKCkge1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGxpYnJhcnkuZ2V0Qm9va3MoKS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGJvb2tDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBib29rQ2FyZC5jbGFzc0xpc3QuYWRkKCdib29rY2FyZCcpXHJcbiAgICAgICAgc2hlbGYuYXBwZW5kQ2hpbGQoYm9va0NhcmQpXHJcblxyXG4gICAgICAgIGNvbnN0IGJvb2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICAgIGJvb2tUaXRsZS50ZXh0Q29udGVudCA9IGxpYnJhcnkuZ2V0Qm9va3MoKVtpXS50aXRsZVxyXG4gICAgICAgIGJvb2tDYXJkLmFwcGVuZENoaWxkKGJvb2tUaXRsZSlcclxuXHJcbiAgICAgICAgY29uc3QgYm9va0F1dGhvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICAgIGlmKGxpYnJhcnkuZ2V0Qm9va3MoKVtpXS5hdXRob3IgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgYm9va0F1dGhvci50ZXh0Q29udGVudCA9ICdVbmtub3duJ1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJvb2tBdXRob3IudGV4dENvbnRlbnQgPSBsaWJyYXJ5LmdldEJvb2tzKClbaV0uYXV0aG9yXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJvb2tDYXJkLmFwcGVuZENoaWxkKGJvb2tBdXRob3IpXHJcblxyXG4gICAgICAgIGNvbnN0IGJvb2tSZW1vdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgIGJvb2tSZW1vdmVCdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICAgIGJvb2tSZW1vdmVCdG4uaWQgPSAncmVtb3ZlLWJvb2snXHJcbiAgICAgICAgYm9va1JlbW92ZUJ0bi50ZXh0Q29udGVudCA9ICdSZW1vdmUnXHJcbiAgICAgICAgYm9va0NhcmQuYXBwZW5kQ2hpbGQoYm9va1JlbW92ZUJ0bilcclxuXHJcbiAgICAgICAgYm9va0NhcmQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcclxuICAgICAgICAgICAgYm9va1JlbW92ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGJvb2tDYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGJvb2tSZW1vdmVCdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgYm9va05hbWUgPSBsaWJyYXJ5LmdldEJvb2tzKClbaV0udGl0bGVcclxuXHJcbiAgICAgICAgYm9va1JlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgYm9va0NhcmQucmVtb3ZlKClcclxuICAgICAgICAgICAgbGlicmFyeS5yZW1vdmVCb29rKGJvb2tOYW1lKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfX1cclxuXHJcbiAgICBmdW5jdGlvbiBzaG93Rm9ybSgpIHtcclxuICAgICAgICBhZGRCb29rRm9ybS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUJvb2tDYXJkKClcclxuXHJcbiAgICByZXR1cm4gbWFpbkJvZHlcclxufSkoKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRE9NIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9vayB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgYXV0aG9yLCBtZWRpdW0pIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcclxuICAgICAgICB0aGlzLmF1dGhvciA9IGF1dGhvclxyXG4gICAgICAgIHRoaXMubWVkaXVtID0gbWVkaXVtXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50aXRsZVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlicmFyeSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmJvb2tzID0gW11cclxuICAgIH1cclxuXHJcbiAgICBnZXRCb29rcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ib29rc1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0YWluc0Jvb2sobmV3Qm9vaykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJvb2tzLnNvbWUoYm9vayA9PiBib29rLnRpdGxlID09PSBuZXdCb29rLnRpdGxlKVxyXG4gICAgfVxyXG5cclxuICAgIGFkZEJvb2sobmV3Qm9vaykge1xyXG4gICAgICAgIGlmKHRoaXMuYm9va3MuZmluZChib29rID0+IGJvb2sudGl0bGUgPT09IG5ld0Jvb2sudGl0bGUpKSByZXR1cm5cclxuICAgICAgICB0aGlzLmJvb2tzLnB1c2gobmV3Qm9vaylcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVCb29rKGJvb2tUaXRsZSkge1xyXG4gICAgICAgIGNvbnN0IGJvb2tUb0RlbGV0ZSA9IHRoaXMuYm9va3MuZmluZChib29rID0+IGJvb2sudGl0bGUgPT09IGJvb2tUaXRsZSlcclxuICAgICAgICByZXR1cm4gdGhpcy5ib29rcy5zcGxpY2UodGhpcy5ib29rcy5pbmRleE9mKGJvb2tUb0RlbGV0ZSksIDEpXHJcbiAgICB9XHJcblxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBET00gZnJvbSBcIi4vRE9NL2RvbVwiO1xyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9