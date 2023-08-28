/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
// on click of the extension icon open popup in a new window
chrome.action.onClicked.addListener(function (tab) {
  chrome.windows.create({
    url: chrome.runtime.getURL('popup.html'),
    type: 'popup'
  });
});
/******/ })()
;
//# sourceMappingURL=background.js.map