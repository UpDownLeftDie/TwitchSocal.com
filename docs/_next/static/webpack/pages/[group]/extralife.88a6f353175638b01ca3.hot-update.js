webpackHotUpdate_N_E("pages/[group]/extralife",{

/***/ "./components/organisms/streamer-schedule.jsx":
/*!****************************************************!*\
  !*** ./components/organisms/streamer-schedule.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _atoms_stream_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../atoms/stream-card */ "./components/atoms/stream-card.jsx");
/* harmony import */ var _src_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/utils */ "./src/utils.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\jared\\Documents\\GitHub\\CACreators.com\\components\\organisms\\streamer-schedule.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var StreamerSchedule = function StreamerSchedule(_ref) {
  var schedule = _ref.schedule,
      teamMembers = _ref.teamMembers;
  if (!schedule) return null;
  var streams = schedule.map(function (stream) {
    var teamMember = teamMembers.find(function (member) {
      if (!(member === null || member === void 0 ? void 0 : member.twitchUsername)) return false;
      return stream.streamer.toLowerCase() === member.twitchUsername.toLowerCase();
    }) || {};
    var timeStart = stream.timeStart,
        timeEnd = stream.timeEnd,
        streamer = stream.streamer;
    var twitchUsername = teamMember.twitchUsername,
        avatarImageURL = teamMember.avatarImageURL;
    var streamIsLive = Object(_src_utils__WEBPACK_IMPORTED_MODULE_4__["default"])(timeStart, timeEnd);
    return __jsx(_atoms_stream_card__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: streamer
    }, {
      twitchUsername: twitchUsername,
      timeStart: timeStart,
      timeEnd: timeEnd,
      streamIsLive: streamIsLive,
      streamer: streamer,
      avatarImageURL: avatarImageURL
    }, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 7
      }
    }));
  });
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, streams);
};

_c = StreamerSchedule;
StreamerSchedule.propTypes = {
  schedule: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["arrayOf"])(Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["shape"])({
    streamer: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"].isRequired,
    timeStart: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"].isRequired,
    timeEnd: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"].isRequired
  })).isRequired,
  teamMembers: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["arrayOf"])(Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["shape"])({
    twitchUsername: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
    displayName: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"].isRequired,
    avatarImageURL: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"].isRequired
  })).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (StreamerSchedule);

var _c;

$RefreshReg$(_c, "StreamerSchedule");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvc3RyZWFtZXItc2NoZWR1bGUuanN4Il0sIm5hbWVzIjpbIlN0cmVhbWVyU2NoZWR1bGUiLCJzY2hlZHVsZSIsInRlYW1NZW1iZXJzIiwic3RyZWFtcyIsIm1hcCIsInN0cmVhbSIsInRlYW1NZW1iZXIiLCJmaW5kIiwibWVtYmVyIiwidHdpdGNoVXNlcm5hbWUiLCJzdHJlYW1lciIsInRvTG93ZXJDYXNlIiwidGltZVN0YXJ0IiwidGltZUVuZCIsImF2YXRhckltYWdlVVJMIiwic3RyZWFtSXNMaXZlIiwiY2hlY2tJZkV2ZW50SXNMaXZlIiwicHJvcFR5cGVzIiwiYXJyYXlPZiIsInNoYXBlIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsT0FBK0I7QUFBQSxNQUE1QkMsUUFBNEIsUUFBNUJBLFFBQTRCO0FBQUEsTUFBbEJDLFdBQWtCLFFBQWxCQSxXQUFrQjtBQUN0RCxNQUFJLENBQUNELFFBQUwsRUFBZSxPQUFPLElBQVA7QUFDZixNQUFNRSxPQUFPLEdBQUdGLFFBQVEsQ0FBQ0csR0FBVCxDQUFhLFVBQUNDLE1BQUQsRUFBWTtBQUN2QyxRQUFNQyxVQUFVLEdBQ2RKLFdBQVcsQ0FBQ0ssSUFBWixDQUFpQixVQUFDQyxNQUFELEVBQVk7QUFDM0IsVUFBSSxFQUFDQSxNQUFELGFBQUNBLE1BQUQsdUJBQUNBLE1BQU0sQ0FBRUMsY0FBVCxDQUFKLEVBQTZCLE9BQU8sS0FBUDtBQUM3QixhQUNFSixNQUFNLENBQUNLLFFBQVAsQ0FBZ0JDLFdBQWhCLE9BQWtDSCxNQUFNLENBQUNDLGNBQVAsQ0FBc0JFLFdBQXRCLEVBRHBDO0FBR0QsS0FMRCxLQUtNLEVBTlI7QUFEdUMsUUFRL0JDLFNBUitCLEdBUUVQLE1BUkYsQ0FRL0JPLFNBUitCO0FBQUEsUUFRcEJDLE9BUm9CLEdBUUVSLE1BUkYsQ0FRcEJRLE9BUm9CO0FBQUEsUUFRWEgsUUFSVyxHQVFFTCxNQVJGLENBUVhLLFFBUlc7QUFBQSxRQVMvQkQsY0FUK0IsR0FTSUgsVUFUSixDQVMvQkcsY0FUK0I7QUFBQSxRQVNmSyxjQVRlLEdBU0lSLFVBVEosQ0FTZlEsY0FUZTtBQVV2QyxRQUFNQyxZQUFZLEdBQUdDLDBEQUFrQixDQUFDSixTQUFELEVBQVlDLE9BQVosQ0FBdkM7QUFDQSxXQUNFLE1BQUMsMERBQUQ7QUFDRSxTQUFHLEVBQUVIO0FBRFAsT0FFTTtBQUNGRCxvQkFBYyxFQUFkQSxjQURFO0FBRUZHLGVBQVMsRUFBVEEsU0FGRTtBQUdGQyxhQUFPLEVBQVBBLE9BSEU7QUFJRkUsa0JBQVksRUFBWkEsWUFKRTtBQUtGTCxjQUFRLEVBQVJBLFFBTEU7QUFNRkksb0JBQWMsRUFBZEE7QUFORSxLQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FERjtBQWFELEdBeEJlLENBQWhCO0FBeUJBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHWCxPQURILENBREY7QUFhRCxDQXhDRDs7S0FBTUgsZ0I7QUEwQ05BLGdCQUFnQixDQUFDaUIsU0FBakIsR0FBNkI7QUFDM0JoQixVQUFRLEVBQUVpQiwwREFBTyxDQUNmQyx3REFBSyxDQUFDO0FBQ0pULFlBQVEsRUFBRVUsaURBQU0sQ0FBQ0MsVUFEYjtBQUVKVCxhQUFTLEVBQUVRLGlEQUFNLENBQUNDLFVBRmQ7QUFHSlIsV0FBTyxFQUFFTyxpREFBTSxDQUFDQztBQUhaLEdBQUQsQ0FEVSxDQUFQLENBTVJBLFVBUHlCO0FBUTNCbkIsYUFBVyxFQUFFZ0IsMERBQU8sQ0FDbEJDLHdEQUFLLENBQUM7QUFDSlYsa0JBQWMsRUFBRVcsaURBRFo7QUFFSkUsZUFBVyxFQUFFRixpREFBTSxDQUFDQyxVQUZoQjtBQUdKUCxrQkFBYyxFQUFFTSxpREFBTSxDQUFDQztBQUhuQixHQUFELENBRGEsQ0FBUCxDQU1YQTtBQWR5QixDQUE3QjtBQWlCZXJCLCtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tncm91cF0vZXh0cmFsaWZlLjg4YTZmMzUzMTc1NjM4YjAxY2EzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhcnJheU9mLCBzaGFwZSwgc3RyaW5nIH0gZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBTdHJlYW1DYXJkIGZyb20gJy4uL2F0b21zL3N0cmVhbS1jYXJkJztcclxuaW1wb3J0IGNoZWNrSWZFdmVudElzTGl2ZSBmcm9tICcuLi8uLi9zcmMvdXRpbHMnO1xyXG5cclxuY29uc3QgU3RyZWFtZXJTY2hlZHVsZSA9ICh7IHNjaGVkdWxlLCB0ZWFtTWVtYmVycyB9KSA9PiB7XHJcbiAgaWYgKCFzY2hlZHVsZSkgcmV0dXJuIG51bGw7XHJcbiAgY29uc3Qgc3RyZWFtcyA9IHNjaGVkdWxlLm1hcCgoc3RyZWFtKSA9PiB7XHJcbiAgICBjb25zdCB0ZWFtTWVtYmVyID1cclxuICAgICAgdGVhbU1lbWJlcnMuZmluZCgobWVtYmVyKSA9PiB7XHJcbiAgICAgICAgaWYgKCFtZW1iZXI/LnR3aXRjaFVzZXJuYW1lKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIHN0cmVhbS5zdHJlYW1lci50b0xvd2VyQ2FzZSgpID09PSBtZW1iZXIudHdpdGNoVXNlcm5hbWUudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pIHx8IHt9O1xyXG4gICAgY29uc3QgeyB0aW1lU3RhcnQsIHRpbWVFbmQsIHN0cmVhbWVyIH0gPSBzdHJlYW07XHJcbiAgICBjb25zdCB7IHR3aXRjaFVzZXJuYW1lLCBhdmF0YXJJbWFnZVVSTCB9ID0gdGVhbU1lbWJlcjtcclxuICAgIGNvbnN0IHN0cmVhbUlzTGl2ZSA9IGNoZWNrSWZFdmVudElzTGl2ZSh0aW1lU3RhcnQsIHRpbWVFbmQpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFN0cmVhbUNhcmRcclxuICAgICAgICBrZXk9e3N0cmVhbWVyfVxyXG4gICAgICAgIHsuLi57XHJcbiAgICAgICAgICB0d2l0Y2hVc2VybmFtZSxcclxuICAgICAgICAgIHRpbWVTdGFydCxcclxuICAgICAgICAgIHRpbWVFbmQsXHJcbiAgICAgICAgICBzdHJlYW1Jc0xpdmUsXHJcbiAgICAgICAgICBzdHJlYW1lcixcclxuICAgICAgICAgIGF2YXRhckltYWdlVVJMLFxyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICApO1xyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7c3RyZWFtc31cclxuICAgICAgey8qIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICBncmlkLXJvdy1nYXA6IDIwcHg7XHJcbiAgICAgICAgICByb3ctZ2FwOiAyMHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT4gKi99XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuU3RyZWFtZXJTY2hlZHVsZS5wcm9wVHlwZXMgPSB7XHJcbiAgc2NoZWR1bGU6IGFycmF5T2YoXHJcbiAgICBzaGFwZSh7XHJcbiAgICAgIHN0cmVhbWVyOiBzdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgICAgdGltZVN0YXJ0OiBzdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgICAgdGltZUVuZDogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICB9KVxyXG4gICkuaXNSZXF1aXJlZCxcclxuICB0ZWFtTWVtYmVyczogYXJyYXlPZihcclxuICAgIHNoYXBlKHtcclxuICAgICAgdHdpdGNoVXNlcm5hbWU6IHN0cmluZyxcclxuICAgICAgZGlzcGxheU5hbWU6IHN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgICBhdmF0YXJJbWFnZVVSTDogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICB9KVxyXG4gICkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0cmVhbWVyU2NoZWR1bGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=