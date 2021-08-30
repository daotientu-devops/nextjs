"use strict";
self["webpackHotUpdate_N_E"]("pages/posts/one",{

/***/ "./lib/posts.js":
/*!**********************!*\
  !*** ./lib/posts.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPostData": function() { return /* binding */ getPostData; },
/* harmony export */   "getAllPostIds": function() { return /* binding */ getAllPostIds; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
function getPostData(id) {
  var postOne = {
    title: 'One',
    id: 1,
    date: '7/12/2020'
  };
  var postTwo = {
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

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/posts/one.js":
/*!****************************!*\
  !*** ./pages/posts/one.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; },
/* harmony export */   "default": function() { return /* binding */ Post; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/container */ "./components/container.js");
/* harmony import */ var _lib_posts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/posts */ "./lib/posts.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "D:\\xampp\\htdocs\\nextjs\\pages\\posts\\one.js";




var __N_SSG = true;
function Post(_ref) {
  var postData = _ref.postData;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_container__WEBPACK_IMPORTED_MODULE_3__.default, {
    children: [postData.id, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this), postData.title, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this), postData.date]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, this);
}
_c = Post;

var _c;

$RefreshReg$(_c, "Post");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvb25lLjU4ZjRkMzNlNDM3YTQxNjhjYWJjLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sU0FBU0EsV0FBVCxDQUFxQkMsRUFBckIsRUFBeUI7QUFDNUIsTUFBTUMsT0FBTyxHQUFHO0FBQ1pDLElBQUFBLEtBQUssRUFBRSxLQURLO0FBRVpGLElBQUFBLEVBQUUsRUFBRSxDQUZRO0FBR1pHLElBQUFBLElBQUksRUFBRTtBQUhNLEdBQWhCO0FBS0EsTUFBTUMsT0FBTyxHQUFHO0FBQ1pGLElBQUFBLEtBQUssRUFBRSxLQURLO0FBRVpGLElBQUFBLEVBQUUsRUFBRSxDQUZRO0FBR1pHLElBQUFBLElBQUksRUFBRTtBQUhNLEdBQWhCOztBQUtBLE1BQUlILEVBQUUsSUFBSSxLQUFWLEVBQWlCO0FBQ2IsV0FBT0MsT0FBUDtBQUNILEdBRkQsTUFFTyxJQUFJRCxFQUFFLElBQUksS0FBVixFQUFpQjtBQUNwQixXQUFPSSxPQUFQO0FBQ0g7QUFDSjtBQUNNLFNBQVNDLGFBQVQsR0FBeUI7QUFDNUIsU0FBTyxDQUNIO0FBQ0lDLElBQUFBLE1BQU0sRUFBRTtBQUNKTixNQUFBQSxFQUFFLEVBQUU7QUFEQTtBQURaLEdBREcsRUFNSDtBQUNJTSxJQUFBQSxNQUFNLEVBQUU7QUFDSk4sTUFBQUEsRUFBRSxFQUFFO0FBREE7QUFEWixHQU5HLENBQVA7QUFZSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCRDtBQUNBO0FBQ0E7QUFDQTs7QUFDZSxTQUFTVSxJQUFULE9BQTBCO0FBQUEsTUFBWEMsUUFBVyxRQUFYQSxRQUFXO0FBQ3JDLHNCQUNJLDhEQUFDLDBEQUFEO0FBQUEsZUFDS0EsUUFBUSxDQUFDWCxFQURkLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLEVBR0tXLFFBQVEsQ0FBQ1QsS0FIZCxlQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSixFQUtLUyxRQUFRLENBQUNSLElBTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFTSDtLQVZ1Qk8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3Bvc3RzLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9wb3N0cy9vbmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGdldFBvc3REYXRhKGlkKSB7XHJcbiAgICBjb25zdCBwb3N0T25lID0ge1xyXG4gICAgICAgIHRpdGxlOiAnT25lJyxcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBkYXRlOiAnNy8xMi8yMDIwJ1xyXG4gICAgfVxyXG4gICAgY29uc3QgcG9zdFR3byA9IHtcclxuICAgICAgICB0aXRsZTogJ1R3bycsXHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgZGF0ZTogJzcvMTIvMjAyMCdcclxuICAgIH1cclxuICAgIGlmIChpZCA9PSAnb25lJykge1xyXG4gICAgICAgIHJldHVybiBwb3N0T25lXHJcbiAgICB9IGVsc2UgaWYgKGlkID09ICd0d28nKSB7XHJcbiAgICAgICAgcmV0dXJuIHBvc3RUd29cclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsUG9zdElkcygpIHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgIGlkOiAnb25lJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICd0d28nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBdXHJcbn0iLCJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb250YWluZXJcIjtcclxuaW1wb3J0IHsgZ2V0QWxsUG9zdElkcywgZ2V0UG9zdERhdGEgfSBmcm9tIFwiLi4vLi4vbGliL3Bvc3RzXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3Qoe3Bvc3REYXRhfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICB7cG9zdERhdGEuaWR9XHJcbiAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIHtwb3N0RGF0YS50aXRsZX1cclxuICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAge3Bvc3REYXRhLmRhdGV9XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHtwYXJhbXN9KSB7XHJcbiAgICBjb25zdCBwb3N0RGF0YSA9IGdldFBvc3REYXRhKHBhcmFtcy5pZClcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgcG9zdERhdGEgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJnZXRQb3N0RGF0YSIsImlkIiwicG9zdE9uZSIsInRpdGxlIiwiZGF0ZSIsInBvc3RUd28iLCJnZXRBbGxQb3N0SWRzIiwicGFyYW1zIiwiTGluayIsIkhlYWQiLCJDb250YWluZXIiLCJQb3N0IiwicG9zdERhdGEiXSwic291cmNlUm9vdCI6IiJ9