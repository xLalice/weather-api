/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}

#content {
	width: 1000px;
	height: 700px;
	margin: 0 auto;
	padding: 30px;
	background-color: #363640;
	display: flex;
	border-radius: 50px;
	gap: 15px;
	opacity: 90%;
}

.input-container {
    position: relative;
}

.input-container input {
    padding-left: 30px;
    background-size: 20px 20px;
	width: 95%;
}

.input-container input::placeholder {
    color: #888; /* Adjust the placeholder text color */
}

.input-container input:focus {
    border-color: #007bff; /* Add styling for the focused input */
}

input {
	width: 100%;
	height: 25px;
	border-radius: 40px;
	margin-bottom: 20px;
	background-color: #070a13;
	color: white;
	padding-left: 20px;
}

#column1 {
	flex-basis: 50%;
	display: flex;
	flex-direction: column;
}

#weather-display {
	background-color: #070f1b;
	border-radius: 50px;
	text-align: center;
	padding: 50px 20px;
	flex: 1;
	color: white;
}

#weather-display > img {
	display: inline;
	margin: 0;
	width: 50px;
	height: 50px;
}

#cityName {
	margin-bottom: 10px;
}

#temp {
	font-size: 50px;
	font-weight: bold;
}

#main-weather {
	font-size: 25px;
	margin-bottom: 120px;
}

#cards {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	grid-gap: 20px;
}

.card {
	height: 100px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 10px;
	background-color: #0b0d16;
	border-radius: 20px;
	padding: 15px;
	color: white;
}

.card h2 {
	font-size: 20px;
	font-weight: bold;
	font-family:Arial, Helvetica, sans-serif
}

#column2 {
	width: 80%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: repeat(3, 1fr);
	grid-gap: 15px;
}

.big-card {
	grid-column: 1/-1;
	background-color: gainsboro;
	border-radius: 20px;
	display: flex;
	flex-direction: column;
	gap: 20px;
}

#weekly {
	grid-column: 1/-1;
	background-color: gainsboro;
	border-radius: 20px;
}

#hourly {
	display: flex;
}

#daily {
	display: flex;
}

.forecast{
	padding: 20px;
	background-color: #070a13;
	color: white;
}

.forecast > h1 {
	margin-bottom: 20px;
	font-size: 20px;
	font-weight: bold;
	font-family: arial;
}

.flex-item {
	flex: 1;
	padding: 15px;
	text-align: center;
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.flex-item > h1 {
	font-size: 22px;
	font-weight: bold;
}

span {
	display: flex;
	gap: 5px;
	align-items: center;
}

span > img {
	height: 20px;
	width: 20px;
}


.big-card > span > h1 {
	font-size:large;
	font-weight: bold;
}

`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;;AAEA;CACC,aAAa;CACb,aAAa;CACb,cAAc;CACd,aAAa;CACb,yBAAyB;CACzB,aAAa;CACb,mBAAmB;CACnB,SAAS;CACT,YAAY;AACb;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,0BAA0B;CAC7B,UAAU;AACX;;AAEA;IACI,WAAW,EAAE,sCAAsC;AACvD;;AAEA;IACI,qBAAqB,EAAE,sCAAsC;AACjE;;AAEA;CACC,WAAW;CACX,YAAY;CACZ,mBAAmB;CACnB,mBAAmB;CACnB,yBAAyB;CACzB,YAAY;CACZ,kBAAkB;AACnB;;AAEA;CACC,eAAe;CACf,aAAa;CACb,sBAAsB;AACvB;;AAEA;CACC,yBAAyB;CACzB,mBAAmB;CACnB,kBAAkB;CAClB,kBAAkB;CAClB,OAAO;CACP,YAAY;AACb;;AAEA;CACC,eAAe;CACf,SAAS;CACT,WAAW;CACX,YAAY;AACb;;AAEA;CACC,mBAAmB;AACpB;;AAEA;CACC,eAAe;CACf,iBAAiB;AAClB;;AAEA;CACC,eAAe;CACf,oBAAoB;AACrB;;AAEA;CACC,aAAa;CACb,8BAA8B;CAC9B,2BAA2B;CAC3B,cAAc;AACf;;AAEA;CACC,aAAa;CACb,aAAa;CACb,sBAAsB;CACtB,uBAAuB;CACvB,SAAS;CACT,yBAAyB;CACzB,mBAAmB;CACnB,aAAa;CACb,YAAY;AACb;;AAEA;CACC,eAAe;CACf,iBAAiB;CACjB;AACD;;AAEA;CACC,UAAU;CACV,aAAa;CACb,8BAA8B;CAC9B,kCAAkC;CAClC,cAAc;AACf;;AAEA;CACC,iBAAiB;CACjB,2BAA2B;CAC3B,mBAAmB;CACnB,aAAa;CACb,sBAAsB;CACtB,SAAS;AACV;;AAEA;CACC,iBAAiB;CACjB,2BAA2B;CAC3B,mBAAmB;AACpB;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,aAAa;CACb,yBAAyB;CACzB,YAAY;AACb;;AAEA;CACC,mBAAmB;CACnB,eAAe;CACf,iBAAiB;CACjB,kBAAkB;AACnB;;AAEA;CACC,OAAO;CACP,aAAa;CACb,kBAAkB;CAClB,aAAa;CACb,sBAAsB;CACtB,SAAS;AACV;;AAEA;CACC,eAAe;CACf,iBAAiB;AAClB;;AAEA;CACC,aAAa;CACb,QAAQ;CACR,mBAAmB;AACpB;;AAEA;CACC,YAAY;CACZ,WAAW;AACZ;;;AAGA;CACC,eAAe;CACf,iBAAiB;AAClB","sourcesContent":["html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\n\n#content {\n\twidth: 1000px;\n\theight: 700px;\n\tmargin: 0 auto;\n\tpadding: 30px;\n\tbackground-color: #363640;\n\tdisplay: flex;\n\tborder-radius: 50px;\n\tgap: 15px;\n\topacity: 90%;\n}\n\n.input-container {\n    position: relative;\n}\n\n.input-container input {\n    padding-left: 30px;\n    background-size: 20px 20px;\n\twidth: 95%;\n}\n\n.input-container input::placeholder {\n    color: #888; /* Adjust the placeholder text color */\n}\n\n.input-container input:focus {\n    border-color: #007bff; /* Add styling for the focused input */\n}\n\ninput {\n\twidth: 100%;\n\theight: 25px;\n\tborder-radius: 40px;\n\tmargin-bottom: 20px;\n\tbackground-color: #070a13;\n\tcolor: white;\n\tpadding-left: 20px;\n}\n\n#column1 {\n\tflex-basis: 50%;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n#weather-display {\n\tbackground-color: #070f1b;\n\tborder-radius: 50px;\n\ttext-align: center;\n\tpadding: 50px 20px;\n\tflex: 1;\n\tcolor: white;\n}\n\n#weather-display > img {\n\tdisplay: inline;\n\tmargin: 0;\n\twidth: 50px;\n\theight: 50px;\n}\n\n#cityName {\n\tmargin-bottom: 10px;\n}\n\n#temp {\n\tfont-size: 50px;\n\tfont-weight: bold;\n}\n\n#main-weather {\n\tfont-size: 25px;\n\tmargin-bottom: 120px;\n}\n\n#cards {\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr;\n\tgrid-template-rows: 1fr 1fr;\n\tgrid-gap: 20px;\n}\n\n.card {\n\theight: 100px;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: flex-start;\n\tgap: 10px;\n\tbackground-color: #0b0d16;\n\tborder-radius: 20px;\n\tpadding: 15px;\n\tcolor: white;\n}\n\n.card h2 {\n\tfont-size: 20px;\n\tfont-weight: bold;\n\tfont-family:Arial, Helvetica, sans-serif\n}\n\n#column2 {\n\twidth: 80%;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr;\n\tgrid-template-rows: repeat(3, 1fr);\n\tgrid-gap: 15px;\n}\n\n.big-card {\n\tgrid-column: 1/-1;\n\tbackground-color: gainsboro;\n\tborder-radius: 20px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 20px;\n}\n\n#weekly {\n\tgrid-column: 1/-1;\n\tbackground-color: gainsboro;\n\tborder-radius: 20px;\n}\n\n#hourly {\n\tdisplay: flex;\n}\n\n#daily {\n\tdisplay: flex;\n}\n\n.forecast{\n\tpadding: 20px;\n\tbackground-color: #070a13;\n\tcolor: white;\n}\n\n.forecast > h1 {\n\tmargin-bottom: 20px;\n\tfont-size: 20px;\n\tfont-weight: bold;\n\tfont-family: arial;\n}\n\n.flex-item {\n\tflex: 1;\n\tpadding: 15px;\n\ttext-align: center;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 10px;\n}\n\n.flex-item > h1 {\n\tfont-size: 22px;\n\tfont-weight: bold;\n}\n\nspan {\n\tdisplay: flex;\n\tgap: 5px;\n\talign-items: center;\n}\n\nspan > img {\n\theight: 20px;\n\twidth: 20px;\n}\n\n\n.big-card > span > h1 {\n\tfont-size:large;\n\tfont-weight: bold;\n}\n\n"],"sourceRoot":""}]);
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

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/assets/backgrounds/clear-sky.jpg":
/*!**********************************************!*\
  !*** ./src/assets/backgrounds/clear-sky.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2869aa9b0b1493822b16.jpg";

/***/ }),

/***/ "./src/assets/backgrounds/mist.jpeg":
/*!******************************************!*\
  !*** ./src/assets/backgrounds/mist.jpeg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "015c693a4f26e7c12247.jpeg";

/***/ }),

/***/ "./src/assets/backgrounds/rain.jpg":
/*!*****************************************!*\
  !*** ./src/assets/backgrounds/rain.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0eae1fc676f150a9b3a1.jpg";

/***/ }),

/***/ "./src/assets/backgrounds/scattered-clouds.jpg":
/*!*****************************************************!*\
  !*** ./src/assets/backgrounds/scattered-clouds.jpg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bc3a743e4952e8424da2.jpg";

/***/ }),

/***/ "./src/assets/backgrounds/snow.jpeg":
/*!******************************************!*\
  !*** ./src/assets/backgrounds/snow.jpeg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e24cc40cb63a0c8163dd.jpeg";

/***/ }),

/***/ "./src/assets/icons/calendar.png":
/*!***************************************!*\
  !*** ./src/assets/icons/calendar.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1029961cfcf025f61431.png";

/***/ }),

/***/ "./src/assets/icons/cloud.png":
/*!************************************!*\
  !*** ./src/assets/icons/cloud.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b99fc2a2510759703b66.png";

/***/ }),

/***/ "./src/assets/icons/eye.png":
/*!**********************************!*\
  !*** ./src/assets/icons/eye.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d931a9cf8d2e03f1a6f8.png";

/***/ }),

/***/ "./src/assets/icons/location.png":
/*!***************************************!*\
  !*** ./src/assets/icons/location.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "777bfceca84eab652f3b.png";

/***/ }),

/***/ "./src/assets/icons/rain.png":
/*!***********************************!*\
  !*** ./src/assets/icons/rain.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4d6706fa02b6eda7c591.png";

/***/ }),

/***/ "./src/assets/icons/temperature.png":
/*!******************************************!*\
  !*** ./src/assets/icons/temperature.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "571cc489b4ab66c9ed94.png";

/***/ }),

/***/ "./src/assets/icons/time-save.png":
/*!****************************************!*\
  !*** ./src/assets/icons/time-save.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c01c1b1f13dca0dc8276.png";

/***/ }),

/***/ "./src/assets/icons/water.png":
/*!************************************!*\
  !*** ./src/assets/icons/water.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dcf0871f8fa6492dfe77.png";

/***/ }),

/***/ "./src/assets/icons/wind.png":
/*!***********************************!*\
  !*** ./src/assets/icons/wind.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "24bc4a19983ae2da76e7.png";

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
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
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _assets_backgrounds_clear_sky_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/backgrounds/clear-sky.jpg */ "./src/assets/backgrounds/clear-sky.jpg");
/* harmony import */ var _assets_backgrounds_mist_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/backgrounds/mist.jpeg */ "./src/assets/backgrounds/mist.jpeg");
/* harmony import */ var _assets_backgrounds_rain_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/backgrounds/rain.jpg */ "./src/assets/backgrounds/rain.jpg");
/* harmony import */ var _assets_backgrounds_scattered_clouds_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/backgrounds/scattered-clouds.jpg */ "./src/assets/backgrounds/scattered-clouds.jpg");
/* harmony import */ var _assets_backgrounds_snow_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/backgrounds/snow.jpeg */ "./src/assets/backgrounds/snow.jpeg");
/* harmony import */ var _assets_icons_temperature_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/icons/temperature.png */ "./src/assets/icons/temperature.png");
/* harmony import */ var _assets_icons_location_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/icons/location.png */ "./src/assets/icons/location.png");
/* harmony import */ var _assets_icons_rain_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/icons/rain.png */ "./src/assets/icons/rain.png");
/* harmony import */ var _assets_icons_eye_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/icons/eye.png */ "./src/assets/icons/eye.png");
/* harmony import */ var _assets_icons_water_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/icons/water.png */ "./src/assets/icons/water.png");
/* harmony import */ var _assets_icons_cloud_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/icons/cloud.png */ "./src/assets/icons/cloud.png");
/* harmony import */ var _assets_icons_wind_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/icons/wind.png */ "./src/assets/icons/wind.png");
/* harmony import */ var _assets_icons_time_save_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/icons/time-save.png */ "./src/assets/icons/time-save.png");
/* harmony import */ var _assets_icons_calendar_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/icons/calendar.png */ "./src/assets/icons/calendar.png");
















const apiKey = 'e1772c01e5bff1382e52d76d5faf38bd';

async function getGeoCode(city){
	let geocode = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}&units=imperial`)
    .then(response => response.json());

	return {
		latitude : geocode[0].lat,
		longitude : geocode[0].lon,
        name : geocode[0].name,
        state: geocode[0].state,
        country: geocode[0].country
	}
}

async function fetchCurrentWeather(city){
    let geo = await getGeoCode(city);

    let weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${geo.latitude}&lon=${geo.longitude}&appid=${apiKey}`)
    let response = await weather.json();
    console.log(response);
    return {
        ...response,
        geoName : geo.name,
        geoState : geo.state,
        geoCountry : geo.country
    };
}

async function fetchForecast(city){
	let geo = await getGeoCode(city);
	console.log(geo);

	let forecast = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${geo.latitude}&longitude=${geo.longitude}&hourly=temperature_2m,weathercode&daily=weathercode,apparent_temperature_max,apparent_temperature_min&timezone=GMT`);
	let response = await forecast.json();
	return response;
}

function extractInfo(weather){
    return {
        main_weather : weather.weather[0].description,
        temp: weather.main.temp,
        feels_like: weather.main.feels_like,
        rain: weather.rain,
        humidity: weather.main.humidity,
        visibility: weather.visibility,
        wind_speed: weather.wind.speed,
        wind_gust: weather.wind.gust,
        clouds: weather.clouds.all,
        city: weather.name,
        id: weather.weather[0].id,
        icon : weather.weather[0].icon,
        geoName : weather.geoName,
        geoState : weather.geoState,
        geoCountry : weather.geoCountry
    }
}

function toTitleCase(str){
	return str.toLowerCase().split(' ').map(function(word) {
		return word.replace(word[0], word[0].toUpperCase());
	}).join(' ');
}

function getCurrentHour(hour) {
    return `${hour}:00`;
}

function getWeatherInterpretation(code) {
    switch (code) {
        case 0:
            return "Clear sky";
        case 1:
            return "Mainly clear";
        case 2:
            return "Partly Cloudy";
        case 3:
            return "Overcast";
        case 45:
            return "Fog"
        case 48:
            return "Depositing rime fog";
        case 51:
            return "Light drizzle";
        case 53:
            return "Moderate drizzle";
        case 55:
            return "Dense Drizzle";
        case 56:
            return "Light freezing drizzle"
        case 57:
            return "Dense Freezing Drizzle";
        case 61:
            return "Slight Rain";
        case 63:
            return "Moderate Rain"
        case 65:
            return "Heavy Rain";
        case 66:
            return "Light Freezing Rain";
        case 67:
            return "Heavy Freezing Rain";
        case 71:
            return "Slight Snowfall";
        case 73:
            return "Moderate Snowfall";
        case 75:
            return "Heavy Snowfall";
        case 77:
            return "Snow grains";
        case 80:
            return "Slight Rainshowers";
        case 81:
            return "Moderate Rainshowers";
        case 82:
            return "Violent Rainshowers";
        case 85:
            return "Slight Snowshowers"
        case 86:
            return "Heavy Snowshowers";
        case 95:
            return "Slight Thunderstorm"
        case 96:
        case 99:
            return "Moderate Thunderstorm";
        default:
            return "Unknown weather code";
    }
}

function getDayName(dateString) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(dateString);
    const dayIndex = date.getDay(); // 0 for Sunday, 1 for Monday, etc.
    return daysOfWeek[dayIndex];
}

async function populateWeatherData(city){
    const weatherData = await fetchCurrentWeather(city);
    const weather = extractInfo(weatherData);
    if (weather.rain) {
        if (weather.rain["1h"] === undefined) {
          weather.rain = "0 mm";
        } else {
          weather.rain = `${weather.rain["1h"]} mm`;
        }
    } else {
    	weather.rain = "0 mm";
    }
    updateBackground(weather.id);

    const weatherIcon = document.querySelector("#weather-icon");
    weatherIcon.src = `https://openweathermap.org/img/wn/${weather.icon}@2x.png`

    document.querySelector("#cityName").textContent = `${weather.geoName}, ${weather.geoState}, ${weather.geoCountry}`;
    document.querySelector("#temp").textContent = `${Math.round((weather.temp - 273.15) * 100) / 100}° C`;
    document.querySelector("#main-weather").textContent = toTitleCase(weather.main_weather);
    document.querySelector("#feels-like").textContent = `${Math.round((weather.feels_like - 273.15) * 100) / 100}° C`;
    document.querySelector("#precipitation").textContent = `${weather.rain}`;
    document.querySelector("#visibility").textContent = `${weather.visibility} m`;
    document.querySelector("#humidity").textContent = `${weather.humidity}%`;
    document.querySelector("#cloudiness").textContent = `${weather.clouds}%`;
    document.querySelector("#wind-speed").textContent = `${weather.wind_speed} mph`;
    document.querySelector("#wind-gust").textContent = `${weather.wind_gust} meter per second`;
}

async function populateForecastData(city){
	const forecast = await fetchForecast(city);
    hourlyWeatherForecast(forecast);
    dailyWeatherForecast(forecast);
    placeIcons();
}

function hourlyWeatherForecast(forecast){
    const hourlyForecast = document.getElementById("hourly");
    const hour = new Date().getHours();
    for (let i=0; i < 6; i++){
        const hourDiv = document.createElement("div");
        hourDiv.classList.add("flex-item");
        let hourText = document.createElement("p");
        if (i === 0){
            hourText.textContent = "Now";
        } else {
            hourText.textContent = getCurrentHour(hour+i);
        }
        const temp = document.createElement("h1");
        temp.textContent = `${Math.round(forecast.hourly.temperature_2m[hour+i])}° C`;
        const weatherCode = document.createElement("p");
        weatherCode.textContent = getWeatherInterpretation(forecast.hourly.weathercode[hour+i]);
        hourDiv.appendChild(hourText);
        hourDiv.appendChild(temp);
        hourDiv.appendChild(weatherCode);
        hourlyForecast.appendChild(hourDiv);
    }
}

function dailyWeatherForecast(forecast){
    const dailyForecast = document.getElementById("daily");
    for (let i=0; i < 6; i++){
        const daily = document.createElement("div");
        daily.classList.add("flex-item");
        let day = document.createElement("p");
        if (i === 0){
            day.textContent = "Today";
        } else {
            day.textContent = getDayName(forecast.daily.time[i]);
        }
        const temp = document.createElement("h1");
        temp.textContent = `${(Math.round(forecast.daily.apparent_temperature_max[i] + forecast.daily.apparent_temperature_min[i]))/2}° C`;
        const weatherCode = document.createElement("p");
        weatherCode.textContent = getWeatherInterpretation(forecast.daily.weathercode[i]);
        daily.appendChild(day);
        daily.appendChild(temp);
        daily.appendChild(weatherCode);
        dailyForecast.appendChild(daily);
    }
}

function updateBackground(code){
    const body = document.querySelector("body");
    let src;
    switch (code) {
        case 800:
            src = _assets_backgrounds_clear_sky_jpg__WEBPACK_IMPORTED_MODULE_1__;
            break;
        case 801:
        case 802:
        case 803:
        case 804:
            src = _assets_backgrounds_scattered_clouds_jpg__WEBPACK_IMPORTED_MODULE_4__;
            break;
        case 701:
            src = _assets_backgrounds_mist_jpeg__WEBPACK_IMPORTED_MODULE_2__;
            break;
        case 500:
        case 501:
        case 502:
        case 503:
        case 504:
        case 511:
        case 520:
        case 521:
        case 522:
        case 531:
            src = _assets_backgrounds_rain_jpg__WEBPACK_IMPORTED_MODULE_3__;
            break;
        case 600:
        case 601:
        case 602:
        case 611:
        case 612:
        case 613:
        case 615:
        case 616:
        case 620:
        case 621:
        case 622:
            src = _assets_backgrounds_snow_jpeg__WEBPACK_IMPORTED_MODULE_5__;
            break;
    }
    body.style.background = `url('${src}') no-repeat`;
    body.style.backgroundSize = "cover";
    return;
}

function placeIcons(){
    const location = document.querySelector("input");
    const feels_like = document.querySelector("#temp-icon");
    const rain = document.querySelector("#rain-icon");
    const eye = document.querySelector("#eye-icon");
    const water = document.querySelector("#water-icon");
    const clouds = document.querySelector("#cloud-icon");
    const wind = document.querySelector("#wind-icon");
    const time = document.querySelector("#time-icon");
    const calendar = document.querySelector("#calendar-icon");
    feels_like.src = _assets_icons_temperature_png__WEBPACK_IMPORTED_MODULE_6__;
    rain.src = _assets_icons_rain_png__WEBPACK_IMPORTED_MODULE_8__;
    eye.src = _assets_icons_eye_png__WEBPACK_IMPORTED_MODULE_9__;
    water.src = _assets_icons_water_png__WEBPACK_IMPORTED_MODULE_10__;
    clouds.src = _assets_icons_cloud_png__WEBPACK_IMPORTED_MODULE_11__;
    wind.src =  _assets_icons_wind_png__WEBPACK_IMPORTED_MODULE_12__;
    time.src = _assets_icons_time_save_png__WEBPACK_IMPORTED_MODULE_13__;
    calendar.src = _assets_icons_calendar_png__WEBPACK_IMPORTED_MODULE_14__;
}


populateWeatherData("Rodriguez, Rizal, Philippines");

populateForecastData("Rodriguez, Rizal, Philippines");

document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    const city = document.querySelector("#city").value;
    populateWeatherData(city);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU8sNkZBQTZGLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sWUFBWSxPQUFPLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssc0JBQXNCLE9BQU8sS0FBSyx3QkFBd0IsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFX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ekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsd0dBQXdHO0FBQ3RJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw4REFBUTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHFFQUFNO0FBQ3hCO0FBQ0E7QUFDQSxrQkFBa0IsMERBQUk7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix5REFBSTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsMERBQUk7QUFDdEI7QUFDQTtBQUNBLG9DQUFvQyxJQUFJO0FBQ3hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwREFBYTtBQUNsQyxlQUFlLG1EQUFRO0FBQ3ZCLGNBQWMsa0RBQU87QUFDckIsZ0JBQWdCLHFEQUFTO0FBQ3pCLGlCQUFpQixxREFBUztBQUMxQixnQkFBZ0Isb0RBQVE7QUFDeEIsZUFBZSx5REFBUTtBQUN2QixtQkFBbUIsd0RBQVk7QUFDL0I7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBpLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcGkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBpLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcGkvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3dlYXRoZXItYXBpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcGkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcGkvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcGkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBpL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcGkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwaS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBpL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBpL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwaS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcbmIsIHUsIGksIGNlbnRlcixcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHRib3JkZXI6IDA7XG5cdGZvbnQtc2l6ZTogMTAwJTtcblx0Zm9udDogaW5oZXJpdDtcblx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuXHRkaXNwbGF5OiBibG9jaztcbn1cbmJvZHkge1xuXHRsaW5lLWhlaWdodDogMTtcbn1cbm9sLCB1bCB7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbiNjb250ZW50IHtcblx0d2lkdGg6IDEwMDBweDtcblx0aGVpZ2h0OiA3MDBweDtcblx0bWFyZ2luOiAwIGF1dG87XG5cdHBhZGRpbmc6IDMwcHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICMzNjM2NDA7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGJvcmRlci1yYWRpdXM6IDUwcHg7XG5cdGdhcDogMTVweDtcblx0b3BhY2l0eTogOTAlO1xufVxuXG4uaW5wdXQtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pbnB1dC1jb250YWluZXIgaW5wdXQge1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwcHggMjBweDtcblx0d2lkdGg6IDk1JTtcbn1cblxuLmlucHV0LWNvbnRhaW5lciBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjODg4OyAvKiBBZGp1c3QgdGhlIHBsYWNlaG9sZGVyIHRleHQgY29sb3IgKi9cbn1cblxuLmlucHV0LWNvbnRhaW5lciBpbnB1dDpmb2N1cyB7XG4gICAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmOyAvKiBBZGQgc3R5bGluZyBmb3IgdGhlIGZvY3VzZWQgaW5wdXQgKi9cbn1cblxuaW5wdXQge1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAyNXB4O1xuXHRib3JkZXItcmFkaXVzOiA0MHB4O1xuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDcwYTEzO1xuXHRjb2xvcjogd2hpdGU7XG5cdHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuI2NvbHVtbjEge1xuXHRmbGV4LWJhc2lzOiA1MCU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbiN3ZWF0aGVyLWRpc3BsYXkge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDcwZjFiO1xuXHRib3JkZXItcmFkaXVzOiA1MHB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHBhZGRpbmc6IDUwcHggMjBweDtcblx0ZmxleDogMTtcblx0Y29sb3I6IHdoaXRlO1xufVxuXG4jd2VhdGhlci1kaXNwbGF5ID4gaW1nIHtcblx0ZGlzcGxheTogaW5saW5lO1xuXHRtYXJnaW46IDA7XG5cdHdpZHRoOiA1MHB4O1xuXHRoZWlnaHQ6IDUwcHg7XG59XG5cbiNjaXR5TmFtZSB7XG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbiN0ZW1wIHtcblx0Zm9udC1zaXplOiA1MHB4O1xuXHRmb250LXdlaWdodDogYm9sZDtcbn1cblxuI21haW4td2VhdGhlciB7XG5cdGZvbnQtc2l6ZTogMjVweDtcblx0bWFyZ2luLWJvdHRvbTogMTIwcHg7XG59XG5cbiNjYXJkcyB7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcblx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xuXHRncmlkLWdhcDogMjBweDtcbn1cblxuLmNhcmQge1xuXHRoZWlnaHQ6IDEwMHB4O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblx0Z2FwOiAxMHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMGIwZDE2O1xuXHRib3JkZXItcmFkaXVzOiAyMHB4O1xuXHRwYWRkaW5nOiAxNXB4O1xuXHRjb2xvcjogd2hpdGU7XG59XG5cbi5jYXJkIGgyIHtcblx0Zm9udC1zaXplOiAyMHB4O1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZlxufVxuXG4jY29sdW1uMiB7XG5cdHdpZHRoOiA4MCU7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcblx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcblx0Z3JpZC1nYXA6IDE1cHg7XG59XG5cbi5iaWctY2FyZCB7XG5cdGdyaWQtY29sdW1uOiAxLy0xO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XG5cdGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMjBweDtcbn1cblxuI3dlZWtseSB7XG5cdGdyaWQtY29sdW1uOiAxLy0xO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XG5cdGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbiNob3VybHkge1xuXHRkaXNwbGF5OiBmbGV4O1xufVxuXG4jZGFpbHkge1xuXHRkaXNwbGF5OiBmbGV4O1xufVxuXG4uZm9yZWNhc3R7XG5cdHBhZGRpbmc6IDIwcHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICMwNzBhMTM7XG5cdGNvbG9yOiB3aGl0ZTtcbn1cblxuLmZvcmVjYXN0ID4gaDEge1xuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xuXHRmb250LXNpemU6IDIwcHg7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRmb250LWZhbWlseTogYXJpYWw7XG59XG5cbi5mbGV4LWl0ZW0ge1xuXHRmbGV4OiAxO1xuXHRwYWRkaW5nOiAxNXB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMTBweDtcbn1cblxuLmZsZXgtaXRlbSA+IGgxIHtcblx0Zm9udC1zaXplOiAyMnB4O1xuXHRmb250LXdlaWdodDogYm9sZDtcbn1cblxuc3BhbiB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGdhcDogNXB4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5zcGFuID4gaW1nIHtcblx0aGVpZ2h0OiAyMHB4O1xuXHR3aWR0aDogMjBweDtcbn1cblxuXG4uYmlnLWNhcmQgPiBzcGFuID4gaDEge1xuXHRmb250LXNpemU6bGFyZ2U7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7QUFDQSxnREFBZ0Q7QUFDaEQ7O0NBRUMsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixhQUFhO0NBQ2IsY0FBYztDQUNkLGFBQWE7Q0FDYix5QkFBeUI7Q0FDekIsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixTQUFTO0NBQ1QsWUFBWTtBQUNiOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDBCQUEwQjtDQUM3QixVQUFVO0FBQ1g7O0FBRUE7SUFDSSxXQUFXLEVBQUUsc0NBQXNDO0FBQ3ZEOztBQUVBO0lBQ0kscUJBQXFCLEVBQUUsc0NBQXNDO0FBQ2pFOztBQUVBO0NBQ0MsV0FBVztDQUNYLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIsbUJBQW1CO0NBQ25CLHlCQUF5QjtDQUN6QixZQUFZO0NBQ1osa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsZUFBZTtDQUNmLGFBQWE7Q0FDYixzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsbUJBQW1CO0NBQ25CLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIsT0FBTztDQUNQLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixTQUFTO0NBQ1QsV0FBVztDQUNYLFlBQVk7QUFDYjs7QUFFQTtDQUNDLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2Ysb0JBQW9CO0FBQ3JCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLDhCQUE4QjtDQUM5QiwyQkFBMkI7Q0FDM0IsY0FBYztBQUNmOztBQUVBO0NBQ0MsYUFBYTtDQUNiLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLFNBQVM7Q0FDVCx5QkFBeUI7Q0FDekIsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYixZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsaUJBQWlCO0NBQ2pCO0FBQ0Q7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsYUFBYTtDQUNiLDhCQUE4QjtDQUM5QixrQ0FBa0M7Q0FDbEMsY0FBYztBQUNmOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLDJCQUEyQjtDQUMzQixtQkFBbUI7Q0FDbkIsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsMkJBQTJCO0NBQzNCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGFBQWE7QUFDZDs7QUFFQTtDQUNDLGFBQWE7QUFDZDs7QUFFQTtDQUNDLGFBQWE7Q0FDYix5QkFBeUI7Q0FDekIsWUFBWTtBQUNiOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsT0FBTztDQUNQLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLFFBQVE7Q0FDUixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osV0FBVztBQUNaOzs7QUFHQTtDQUNDLGVBQWU7Q0FDZixpQkFBaUI7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuI2NvbnRlbnQge1xcblxcdHdpZHRoOiAxMDAwcHg7XFxuXFx0aGVpZ2h0OiA3MDBweDtcXG5cXHRtYXJnaW46IDAgYXV0bztcXG5cXHRwYWRkaW5nOiAzMHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMzNjM2NDA7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRib3JkZXItcmFkaXVzOiA1MHB4O1xcblxcdGdhcDogMTVweDtcXG5cXHRvcGFjaXR5OiA5MCU7XFxufVxcblxcbi5pbnB1dC1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5pbnB1dC1jb250YWluZXIgaW5wdXQge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMjBweCAyMHB4O1xcblxcdHdpZHRoOiA5NSU7XFxufVxcblxcbi5pbnB1dC1jb250YWluZXIgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6ICM4ODg7IC8qIEFkanVzdCB0aGUgcGxhY2Vob2xkZXIgdGV4dCBjb2xvciAqL1xcbn1cXG5cXG4uaW5wdXQtY29udGFpbmVyIGlucHV0OmZvY3VzIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmOyAvKiBBZGQgc3R5bGluZyBmb3IgdGhlIGZvY3VzZWQgaW5wdXQgKi9cXG59XFxuXFxuaW5wdXQge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMjVweDtcXG5cXHRib3JkZXItcmFkaXVzOiA0MHB4O1xcblxcdG1hcmdpbi1ib3R0b206IDIwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzA3MGExMztcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0cGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4jY29sdW1uMSB7XFxuXFx0ZmxleC1iYXNpczogNTAlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI3dlYXRoZXItZGlzcGxheSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzA3MGYxYjtcXG5cXHRib3JkZXItcmFkaXVzOiA1MHB4O1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiA1MHB4IDIwcHg7XFxuXFx0ZmxleDogMTtcXG5cXHRjb2xvcjogd2hpdGU7XFxufVxcblxcbiN3ZWF0aGVyLWRpc3BsYXkgPiBpbWcge1xcblxcdGRpc3BsYXk6IGlubGluZTtcXG5cXHRtYXJnaW46IDA7XFxuXFx0d2lkdGg6IDUwcHg7XFxuXFx0aGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4jY2l0eU5hbWUge1xcblxcdG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbiN0ZW1wIHtcXG5cXHRmb250LXNpemU6IDUwcHg7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNtYWluLXdlYXRoZXIge1xcblxcdGZvbnQtc2l6ZTogMjVweDtcXG5cXHRtYXJnaW4tYm90dG9tOiAxMjBweDtcXG59XFxuXFxuI2NhcmRzIHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuXFx0Z3JpZC1nYXA6IDIwcHg7XFxufVxcblxcbi5jYXJkIHtcXG5cXHRoZWlnaHQ6IDEwMHB4O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG5cXHRnYXA6IDEwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzBiMGQxNjtcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcblxcdHBhZGRpbmc6IDE1cHg7XFxuXFx0Y29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uY2FyZCBoMiB7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdGZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWZcXG59XFxuXFxuI2NvbHVtbjIge1xcblxcdHdpZHRoOiA4MCU7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXG5cXHRncmlkLWdhcDogMTVweDtcXG59XFxuXFxuLmJpZy1jYXJkIHtcXG5cXHRncmlkLWNvbHVtbjogMS8tMTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAyMHB4O1xcbn1cXG5cXG4jd2Vla2x5IHtcXG5cXHRncmlkLWNvbHVtbjogMS8tMTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuI2hvdXJseSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG59XFxuXFxuI2RhaWx5IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZm9yZWNhc3R7XFxuXFx0cGFkZGluZzogMjBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDcwYTEzO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmZvcmVjYXN0ID4gaDEge1xcblxcdG1hcmdpbi1ib3R0b206IDIwcHg7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdGZvbnQtZmFtaWx5OiBhcmlhbDtcXG59XFxuXFxuLmZsZXgtaXRlbSB7XFxuXFx0ZmxleDogMTtcXG5cXHRwYWRkaW5nOiAxNXB4O1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAxMHB4O1xcbn1cXG5cXG4uZmxleC1pdGVtID4gaDEge1xcblxcdGZvbnQtc2l6ZTogMjJweDtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuc3BhbiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRnYXA6IDVweDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5zcGFuID4gaW1nIHtcXG5cXHRoZWlnaHQ6IDIwcHg7XFxuXFx0d2lkdGg6IDIwcHg7XFxufVxcblxcblxcbi5iaWctY2FyZCA+IHNwYW4gPiBoMSB7XFxuXFx0Zm9udC1zaXplOmxhcmdlO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuaW1wb3J0IGNsZWFyU2t5IGZyb20gXCIuL2Fzc2V0cy9iYWNrZ3JvdW5kcy9jbGVhci1za3kuanBnXCI7XG5pbXBvcnQgbWlzdCBmcm9tIFwiLi9hc3NldHMvYmFja2dyb3VuZHMvbWlzdC5qcGVnXCI7XG5pbXBvcnQgcmFpbiBmcm9tIFwiLi9hc3NldHMvYmFja2dyb3VuZHMvcmFpbi5qcGdcIjtcbmltcG9ydCBjbG91ZHMgZnJvbSBcIi4vYXNzZXRzL2JhY2tncm91bmRzL3NjYXR0ZXJlZC1jbG91ZHMuanBnXCI7XG5pbXBvcnQgc25vdyBmcm9tIFwiLi9hc3NldHMvYmFja2dyb3VuZHMvc25vdy5qcGVnXCI7XG5pbXBvcnQgZmVlbHNsaWtlSWNvbiBmcm9tIFwiLi9hc3NldHMvaWNvbnMvdGVtcGVyYXR1cmUucG5nXCJcbmltcG9ydCBsb2NhdGlvbkljb24gZnJvbSBcIi4vYXNzZXRzL2ljb25zL2xvY2F0aW9uLnBuZ1wiO1xuaW1wb3J0IHJhaW5JY29uIGZyb20gXCIuL2Fzc2V0cy9pY29ucy9yYWluLnBuZ1wiO1xuaW1wb3J0IGV5ZUljb24gZnJvbSBcIi4vYXNzZXRzL2ljb25zL2V5ZS5wbmdcIjtcbmltcG9ydCB3YXRlckljb24gZnJvbSBcIi4vYXNzZXRzL2ljb25zL3dhdGVyLnBuZ1wiO1xuaW1wb3J0IGNsb3VkSWNvbiBmcm9tIFwiLi9hc3NldHMvaWNvbnMvY2xvdWQucG5nXCI7XG5pbXBvcnQgd2luZEljb24gZnJvbSBcIi4vYXNzZXRzL2ljb25zL3dpbmQucG5nXCI7XG5pbXBvcnQgdGltZUljb24gZnJvbSBcIi4vYXNzZXRzL2ljb25zL3RpbWUtc2F2ZS5wbmdcIlxuaW1wb3J0IGNhbGVuZGFySWNvbiBmcm9tIFwiLi9hc3NldHMvaWNvbnMvY2FsZW5kYXIucG5nXCI7XG5cbmNvbnN0IGFwaUtleSA9ICdlMTc3MmMwMWU1YmZmMTM4MmU1MmQ3NmQ1ZmFmMzhiZCc7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEdlb0NvZGUoY2l0eSl7XG5cdGxldCBnZW9jb2RlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtjaXR5fSZsaW1pdD01JmFwcGlkPSR7YXBpS2V5fSZ1bml0cz1pbXBlcmlhbGApXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcblxuXHRyZXR1cm4ge1xuXHRcdGxhdGl0dWRlIDogZ2VvY29kZVswXS5sYXQsXG5cdFx0bG9uZ2l0dWRlIDogZ2VvY29kZVswXS5sb24sXG4gICAgICAgIG5hbWUgOiBnZW9jb2RlWzBdLm5hbWUsXG4gICAgICAgIHN0YXRlOiBnZW9jb2RlWzBdLnN0YXRlLFxuICAgICAgICBjb3VudHJ5OiBnZW9jb2RlWzBdLmNvdW50cnlcblx0fVxufVxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaEN1cnJlbnRXZWF0aGVyKGNpdHkpe1xuICAgIGxldCBnZW8gPSBhd2FpdCBnZXRHZW9Db2RlKGNpdHkpO1xuXG4gICAgbGV0IHdlYXRoZXIgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PSR7Z2VvLmxhdGl0dWRlfSZsb249JHtnZW8ubG9uZ2l0dWRlfSZhcHBpZD0ke2FwaUtleX1gKVxuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IHdlYXRoZXIuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICByZXR1cm4ge1xuICAgICAgICAuLi5yZXNwb25zZSxcbiAgICAgICAgZ2VvTmFtZSA6IGdlby5uYW1lLFxuICAgICAgICBnZW9TdGF0ZSA6IGdlby5zdGF0ZSxcbiAgICAgICAgZ2VvQ291bnRyeSA6IGdlby5jb3VudHJ5XG4gICAgfTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hGb3JlY2FzdChjaXR5KXtcblx0bGV0IGdlbyA9IGF3YWl0IGdldEdlb0NvZGUoY2l0eSk7XG5cdGNvbnNvbGUubG9nKGdlbyk7XG5cblx0bGV0IGZvcmVjYXN0ID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW4tbWV0ZW8uY29tL3YxL2ZvcmVjYXN0P2xhdGl0dWRlPSR7Z2VvLmxhdGl0dWRlfSZsb25naXR1ZGU9JHtnZW8ubG9uZ2l0dWRlfSZob3VybHk9dGVtcGVyYXR1cmVfMm0sd2VhdGhlcmNvZGUmZGFpbHk9d2VhdGhlcmNvZGUsYXBwYXJlbnRfdGVtcGVyYXR1cmVfbWF4LGFwcGFyZW50X3RlbXBlcmF0dXJlX21pbiZ0aW1lem9uZT1HTVRgKTtcblx0bGV0IHJlc3BvbnNlID0gYXdhaXQgZm9yZWNhc3QuanNvbigpO1xuXHRyZXR1cm4gcmVzcG9uc2U7XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RJbmZvKHdlYXRoZXIpe1xuICAgIHJldHVybiB7XG4gICAgICAgIG1haW5fd2VhdGhlciA6IHdlYXRoZXIud2VhdGhlclswXS5kZXNjcmlwdGlvbixcbiAgICAgICAgdGVtcDogd2VhdGhlci5tYWluLnRlbXAsXG4gICAgICAgIGZlZWxzX2xpa2U6IHdlYXRoZXIubWFpbi5mZWVsc19saWtlLFxuICAgICAgICByYWluOiB3ZWF0aGVyLnJhaW4sXG4gICAgICAgIGh1bWlkaXR5OiB3ZWF0aGVyLm1haW4uaHVtaWRpdHksXG4gICAgICAgIHZpc2liaWxpdHk6IHdlYXRoZXIudmlzaWJpbGl0eSxcbiAgICAgICAgd2luZF9zcGVlZDogd2VhdGhlci53aW5kLnNwZWVkLFxuICAgICAgICB3aW5kX2d1c3Q6IHdlYXRoZXIud2luZC5ndXN0LFxuICAgICAgICBjbG91ZHM6IHdlYXRoZXIuY2xvdWRzLmFsbCxcbiAgICAgICAgY2l0eTogd2VhdGhlci5uYW1lLFxuICAgICAgICBpZDogd2VhdGhlci53ZWF0aGVyWzBdLmlkLFxuICAgICAgICBpY29uIDogd2VhdGhlci53ZWF0aGVyWzBdLmljb24sXG4gICAgICAgIGdlb05hbWUgOiB3ZWF0aGVyLmdlb05hbWUsXG4gICAgICAgIGdlb1N0YXRlIDogd2VhdGhlci5nZW9TdGF0ZSxcbiAgICAgICAgZ2VvQ291bnRyeSA6IHdlYXRoZXIuZ2VvQ291bnRyeVxuICAgIH1cbn1cblxuZnVuY3Rpb24gdG9UaXRsZUNhc2Uoc3RyKXtcblx0cmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpLnNwbGl0KCcgJykubWFwKGZ1bmN0aW9uKHdvcmQpIHtcblx0XHRyZXR1cm4gd29yZC5yZXBsYWNlKHdvcmRbMF0sIHdvcmRbMF0udG9VcHBlckNhc2UoKSk7XG5cdH0pLmpvaW4oJyAnKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q3VycmVudEhvdXIoaG91cikge1xuICAgIHJldHVybiBgJHtob3VyfTowMGA7XG59XG5cbmZ1bmN0aW9uIGdldFdlYXRoZXJJbnRlcnByZXRhdGlvbihjb2RlKSB7XG4gICAgc3dpdGNoIChjb2RlKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHJldHVybiBcIkNsZWFyIHNreVwiO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICByZXR1cm4gXCJNYWlubHkgY2xlYXJcIjtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIFwiUGFydGx5IENsb3VkeVwiO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICByZXR1cm4gXCJPdmVyY2FzdFwiO1xuICAgICAgICBjYXNlIDQ1OlxuICAgICAgICAgICAgcmV0dXJuIFwiRm9nXCJcbiAgICAgICAgY2FzZSA0ODpcbiAgICAgICAgICAgIHJldHVybiBcIkRlcG9zaXRpbmcgcmltZSBmb2dcIjtcbiAgICAgICAgY2FzZSA1MTpcbiAgICAgICAgICAgIHJldHVybiBcIkxpZ2h0IGRyaXp6bGVcIjtcbiAgICAgICAgY2FzZSA1MzpcbiAgICAgICAgICAgIHJldHVybiBcIk1vZGVyYXRlIGRyaXp6bGVcIjtcbiAgICAgICAgY2FzZSA1NTpcbiAgICAgICAgICAgIHJldHVybiBcIkRlbnNlIERyaXp6bGVcIjtcbiAgICAgICAgY2FzZSA1NjpcbiAgICAgICAgICAgIHJldHVybiBcIkxpZ2h0IGZyZWV6aW5nIGRyaXp6bGVcIlxuICAgICAgICBjYXNlIDU3OlxuICAgICAgICAgICAgcmV0dXJuIFwiRGVuc2UgRnJlZXppbmcgRHJpenpsZVwiO1xuICAgICAgICBjYXNlIDYxOlxuICAgICAgICAgICAgcmV0dXJuIFwiU2xpZ2h0IFJhaW5cIjtcbiAgICAgICAgY2FzZSA2MzpcbiAgICAgICAgICAgIHJldHVybiBcIk1vZGVyYXRlIFJhaW5cIlxuICAgICAgICBjYXNlIDY1OlxuICAgICAgICAgICAgcmV0dXJuIFwiSGVhdnkgUmFpblwiO1xuICAgICAgICBjYXNlIDY2OlxuICAgICAgICAgICAgcmV0dXJuIFwiTGlnaHQgRnJlZXppbmcgUmFpblwiO1xuICAgICAgICBjYXNlIDY3OlxuICAgICAgICAgICAgcmV0dXJuIFwiSGVhdnkgRnJlZXppbmcgUmFpblwiO1xuICAgICAgICBjYXNlIDcxOlxuICAgICAgICAgICAgcmV0dXJuIFwiU2xpZ2h0IFNub3dmYWxsXCI7XG4gICAgICAgIGNhc2UgNzM6XG4gICAgICAgICAgICByZXR1cm4gXCJNb2RlcmF0ZSBTbm93ZmFsbFwiO1xuICAgICAgICBjYXNlIDc1OlxuICAgICAgICAgICAgcmV0dXJuIFwiSGVhdnkgU25vd2ZhbGxcIjtcbiAgICAgICAgY2FzZSA3NzpcbiAgICAgICAgICAgIHJldHVybiBcIlNub3cgZ3JhaW5zXCI7XG4gICAgICAgIGNhc2UgODA6XG4gICAgICAgICAgICByZXR1cm4gXCJTbGlnaHQgUmFpbnNob3dlcnNcIjtcbiAgICAgICAgY2FzZSA4MTpcbiAgICAgICAgICAgIHJldHVybiBcIk1vZGVyYXRlIFJhaW5zaG93ZXJzXCI7XG4gICAgICAgIGNhc2UgODI6XG4gICAgICAgICAgICByZXR1cm4gXCJWaW9sZW50IFJhaW5zaG93ZXJzXCI7XG4gICAgICAgIGNhc2UgODU6XG4gICAgICAgICAgICByZXR1cm4gXCJTbGlnaHQgU25vd3Nob3dlcnNcIlxuICAgICAgICBjYXNlIDg2OlxuICAgICAgICAgICAgcmV0dXJuIFwiSGVhdnkgU25vd3Nob3dlcnNcIjtcbiAgICAgICAgY2FzZSA5NTpcbiAgICAgICAgICAgIHJldHVybiBcIlNsaWdodCBUaHVuZGVyc3Rvcm1cIlxuICAgICAgICBjYXNlIDk2OlxuICAgICAgICBjYXNlIDk5OlxuICAgICAgICAgICAgcmV0dXJuIFwiTW9kZXJhdGUgVGh1bmRlcnN0b3JtXCI7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gXCJVbmtub3duIHdlYXRoZXIgY29kZVwiO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGF5TmFtZShkYXRlU3RyaW5nKSB7XG4gICAgY29uc3QgZGF5c09mV2VlayA9IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXTtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZGF0ZVN0cmluZyk7XG4gICAgY29uc3QgZGF5SW5kZXggPSBkYXRlLmdldERheSgpOyAvLyAwIGZvciBTdW5kYXksIDEgZm9yIE1vbmRheSwgZXRjLlxuICAgIHJldHVybiBkYXlzT2ZXZWVrW2RheUluZGV4XTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcG9wdWxhdGVXZWF0aGVyRGF0YShjaXR5KXtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGZldGNoQ3VycmVudFdlYXRoZXIoY2l0eSk7XG4gICAgY29uc3Qgd2VhdGhlciA9IGV4dHJhY3RJbmZvKHdlYXRoZXJEYXRhKTtcbiAgICBpZiAod2VhdGhlci5yYWluKSB7XG4gICAgICAgIGlmICh3ZWF0aGVyLnJhaW5bXCIxaFwiXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgd2VhdGhlci5yYWluID0gXCIwIG1tXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2VhdGhlci5yYWluID0gYCR7d2VhdGhlci5yYWluW1wiMWhcIl19IG1tYDtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgXHR3ZWF0aGVyLnJhaW4gPSBcIjAgbW1cIjtcbiAgICB9XG4gICAgdXBkYXRlQmFja2dyb3VuZCh3ZWF0aGVyLmlkKTtcblxuICAgIGNvbnN0IHdlYXRoZXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3ZWF0aGVyLWljb25cIik7XG4gICAgd2VhdGhlckljb24uc3JjID0gYGh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke3dlYXRoZXIuaWNvbn1AMngucG5nYFxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjaXR5TmFtZVwiKS50ZXh0Q29udGVudCA9IGAke3dlYXRoZXIuZ2VvTmFtZX0sICR7d2VhdGhlci5nZW9TdGF0ZX0sICR7d2VhdGhlci5nZW9Db3VudHJ5fWA7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0ZW1wXCIpLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZCgod2VhdGhlci50ZW1wIC0gMjczLjE1KSAqIDEwMCkgLyAxMDB9wrAgQ2A7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLXdlYXRoZXJcIikudGV4dENvbnRlbnQgPSB0b1RpdGxlQ2FzZSh3ZWF0aGVyLm1haW5fd2VhdGhlcik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmZWVscy1saWtlXCIpLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZCgod2VhdGhlci5mZWVsc19saWtlIC0gMjczLjE1KSAqIDEwMCkgLyAxMDB9wrAgQ2A7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmVjaXBpdGF0aW9uXCIpLnRleHRDb250ZW50ID0gYCR7d2VhdGhlci5yYWlufWA7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN2aXNpYmlsaXR5XCIpLnRleHRDb250ZW50ID0gYCR7d2VhdGhlci52aXNpYmlsaXR5fSBtYDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2h1bWlkaXR5XCIpLnRleHRDb250ZW50ID0gYCR7d2VhdGhlci5odW1pZGl0eX0lYDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3VkaW5lc3NcIikudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyLmNsb3Vkc30lYDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dpbmQtc3BlZWRcIikudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyLndpbmRfc3BlZWR9IG1waGA7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3aW5kLWd1c3RcIikudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyLndpbmRfZ3VzdH0gbWV0ZXIgcGVyIHNlY29uZGA7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHBvcHVsYXRlRm9yZWNhc3REYXRhKGNpdHkpe1xuXHRjb25zdCBmb3JlY2FzdCA9IGF3YWl0IGZldGNoRm9yZWNhc3QoY2l0eSk7XG4gICAgaG91cmx5V2VhdGhlckZvcmVjYXN0KGZvcmVjYXN0KTtcbiAgICBkYWlseVdlYXRoZXJGb3JlY2FzdChmb3JlY2FzdCk7XG4gICAgcGxhY2VJY29ucygpO1xufVxuXG5mdW5jdGlvbiBob3VybHlXZWF0aGVyRm9yZWNhc3QoZm9yZWNhc3Qpe1xuICAgIGNvbnN0IGhvdXJseUZvcmVjYXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob3VybHlcIik7XG4gICAgY29uc3QgaG91ciA9IG5ldyBEYXRlKCkuZ2V0SG91cnMoKTtcbiAgICBmb3IgKGxldCBpPTA7IGkgPCA2OyBpKyspe1xuICAgICAgICBjb25zdCBob3VyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaG91ckRpdi5jbGFzc0xpc3QuYWRkKFwiZmxleC1pdGVtXCIpO1xuICAgICAgICBsZXQgaG91clRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgaWYgKGkgPT09IDApe1xuICAgICAgICAgICAgaG91clRleHQudGV4dENvbnRlbnQgPSBcIk5vd1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaG91clRleHQudGV4dENvbnRlbnQgPSBnZXRDdXJyZW50SG91cihob3VyK2kpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgIHRlbXAudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKGZvcmVjYXN0LmhvdXJseS50ZW1wZXJhdHVyZV8ybVtob3VyK2ldKX3CsCBDYDtcbiAgICAgICAgY29uc3Qgd2VhdGhlckNvZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgd2VhdGhlckNvZGUudGV4dENvbnRlbnQgPSBnZXRXZWF0aGVySW50ZXJwcmV0YXRpb24oZm9yZWNhc3QuaG91cmx5LndlYXRoZXJjb2RlW2hvdXIraV0pO1xuICAgICAgICBob3VyRGl2LmFwcGVuZENoaWxkKGhvdXJUZXh0KTtcbiAgICAgICAgaG91ckRpdi5hcHBlbmRDaGlsZCh0ZW1wKTtcbiAgICAgICAgaG91ckRpdi5hcHBlbmRDaGlsZCh3ZWF0aGVyQ29kZSk7XG4gICAgICAgIGhvdXJseUZvcmVjYXN0LmFwcGVuZENoaWxkKGhvdXJEaXYpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZGFpbHlXZWF0aGVyRm9yZWNhc3QoZm9yZWNhc3Qpe1xuICAgIGNvbnN0IGRhaWx5Rm9yZWNhc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhaWx5XCIpO1xuICAgIGZvciAobGV0IGk9MDsgaSA8IDY7IGkrKyl7XG4gICAgICAgIGNvbnN0IGRhaWx5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGFpbHkuY2xhc3NMaXN0LmFkZChcImZsZXgtaXRlbVwiKTtcbiAgICAgICAgbGV0IGRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBpZiAoaSA9PT0gMCl7XG4gICAgICAgICAgICBkYXkudGV4dENvbnRlbnQgPSBcIlRvZGF5XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkYXkudGV4dENvbnRlbnQgPSBnZXREYXlOYW1lKGZvcmVjYXN0LmRhaWx5LnRpbWVbaV0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgIHRlbXAudGV4dENvbnRlbnQgPSBgJHsoTWF0aC5yb3VuZChmb3JlY2FzdC5kYWlseS5hcHBhcmVudF90ZW1wZXJhdHVyZV9tYXhbaV0gKyBmb3JlY2FzdC5kYWlseS5hcHBhcmVudF90ZW1wZXJhdHVyZV9taW5baV0pKS8yfcKwIENgO1xuICAgICAgICBjb25zdCB3ZWF0aGVyQ29kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICB3ZWF0aGVyQ29kZS50ZXh0Q29udGVudCA9IGdldFdlYXRoZXJJbnRlcnByZXRhdGlvbihmb3JlY2FzdC5kYWlseS53ZWF0aGVyY29kZVtpXSk7XG4gICAgICAgIGRhaWx5LmFwcGVuZENoaWxkKGRheSk7XG4gICAgICAgIGRhaWx5LmFwcGVuZENoaWxkKHRlbXApO1xuICAgICAgICBkYWlseS5hcHBlbmRDaGlsZCh3ZWF0aGVyQ29kZSk7XG4gICAgICAgIGRhaWx5Rm9yZWNhc3QuYXBwZW5kQ2hpbGQoZGFpbHkpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlQmFja2dyb3VuZChjb2RlKXtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgbGV0IHNyYztcbiAgICBzd2l0Y2ggKGNvZGUpIHtcbiAgICAgICAgY2FzZSA4MDA6XG4gICAgICAgICAgICBzcmMgPSBjbGVhclNreTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDgwMTpcbiAgICAgICAgY2FzZSA4MDI6XG4gICAgICAgIGNhc2UgODAzOlxuICAgICAgICBjYXNlIDgwNDpcbiAgICAgICAgICAgIHNyYyA9IGNsb3VkcztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDcwMTpcbiAgICAgICAgICAgIHNyYyA9IG1pc3Q7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1MDA6XG4gICAgICAgIGNhc2UgNTAxOlxuICAgICAgICBjYXNlIDUwMjpcbiAgICAgICAgY2FzZSA1MDM6XG4gICAgICAgIGNhc2UgNTA0OlxuICAgICAgICBjYXNlIDUxMTpcbiAgICAgICAgY2FzZSA1MjA6XG4gICAgICAgIGNhc2UgNTIxOlxuICAgICAgICBjYXNlIDUyMjpcbiAgICAgICAgY2FzZSA1MzE6XG4gICAgICAgICAgICBzcmMgPSByYWluO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjAwOlxuICAgICAgICBjYXNlIDYwMTpcbiAgICAgICAgY2FzZSA2MDI6XG4gICAgICAgIGNhc2UgNjExOlxuICAgICAgICBjYXNlIDYxMjpcbiAgICAgICAgY2FzZSA2MTM6XG4gICAgICAgIGNhc2UgNjE1OlxuICAgICAgICBjYXNlIDYxNjpcbiAgICAgICAgY2FzZSA2MjA6XG4gICAgICAgIGNhc2UgNjIxOlxuICAgICAgICBjYXNlIDYyMjpcbiAgICAgICAgICAgIHNyYyA9IHNub3c7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgnJHtzcmN9Jykgbm8tcmVwZWF0YDtcbiAgICBib2R5LnN0eWxlLmJhY2tncm91bmRTaXplID0gXCJjb3ZlclwiO1xuICAgIHJldHVybjtcbn1cblxuZnVuY3Rpb24gcGxhY2VJY29ucygpe1xuICAgIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuICAgIGNvbnN0IGZlZWxzX2xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RlbXAtaWNvblwiKTtcbiAgICBjb25zdCByYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyYWluLWljb25cIik7XG4gICAgY29uc3QgZXllID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNleWUtaWNvblwiKTtcbiAgICBjb25zdCB3YXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2F0ZXItaWNvblwiKTtcbiAgICBjb25zdCBjbG91ZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3VkLWljb25cIik7XG4gICAgY29uc3Qgd2luZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2luZC1pY29uXCIpO1xuICAgIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpbWUtaWNvblwiKTtcbiAgICBjb25zdCBjYWxlbmRhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FsZW5kYXItaWNvblwiKTtcbiAgICBmZWVsc19saWtlLnNyYyA9IGZlZWxzbGlrZUljb247XG4gICAgcmFpbi5zcmMgPSByYWluSWNvbjtcbiAgICBleWUuc3JjID0gZXllSWNvbjtcbiAgICB3YXRlci5zcmMgPSB3YXRlckljb247XG4gICAgY2xvdWRzLnNyYyA9IGNsb3VkSWNvbjtcbiAgICB3aW5kLnNyYyA9ICB3aW5kSWNvbjtcbiAgICB0aW1lLnNyYyA9IHRpbWVJY29uO1xuICAgIGNhbGVuZGFyLnNyYyA9IGNhbGVuZGFySWNvbjtcbn1cblxuXG5wb3B1bGF0ZVdlYXRoZXJEYXRhKFwiUm9kcmlndWV6LCBSaXphbCwgUGhpbGlwcGluZXNcIik7XG5cbnBvcHVsYXRlRm9yZWNhc3REYXRhKFwiUm9kcmlndWV6LCBSaXphbCwgUGhpbGlwcGluZXNcIik7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjaXR5XCIpLnZhbHVlO1xuICAgIHBvcHVsYXRlV2VhdGhlckRhdGEoY2l0eSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==