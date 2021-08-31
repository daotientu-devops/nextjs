(() => {
var exports = {};
exports.id = 646;
exports.ids = [646];
exports.modules = {

/***/ 742:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _container_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88);
/* harmony import */ var _container_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_container_module_css__WEBPACK_IMPORTED_MODULE_1__);



function Container({
  children
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: (_container_module_css__WEBPACK_IMPORTED_MODULE_1___default().container),
    children: children
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);

/***/ }),

/***/ 625:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Post),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
// EXTERNAL MODULE: ./components/container.js
var container = __webpack_require__(742);
;// CONCATENATED MODULE: ./lib/posts.js
function getPostData(id) {
  const postOne = {
    title: 'One',
    id: 1,
    date: '7/12/2020'
  };
  const postTwo = {
    title: 'Two',
    id: 2,
    date: '7/12/2020'
  };

  if (id == 'one') {
    return postOne;
  } else if (id == 'two') {
    return postTwo;
  }
}
function getAllPostIds() {
  return [{
    params: {
      id: 'one'
    }
  }, {
    params: {
      id: 'two'
    }
  }];
}
;// CONCATENATED MODULE: ./pages/posts/[id].js






function Post({
  postData
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(container/* default */.Z, {
    children: [postData.id, /*#__PURE__*/jsx_runtime_.jsx("br", {}), postData.title, /*#__PURE__*/jsx_runtime_.jsx("br", {}), postData.date]
  });
}
async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  };
}
async function getStaticProps({
  params
}) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData
    }
  };
}

/***/ }),

/***/ 88:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "container_container__2oEsn"
};


/***/ }),

/***/ 325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 701:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664], () => (__webpack_exec__(625)));
module.exports = __webpack_exports__;

})();