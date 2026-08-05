// _runtime/00267_setUpMutationObserver.js
const require = arg1;
const dependencyMap = arg6;
let c2 = false;
arg5.default = function setUpMutationObserver() {
  if (!c2) {
    c2 = true;
    require("00123_polyfillObjectProperty.js") /* polyfillObjectProperty */.polyfillGlobal("MutationObserver", () => callback(268).default);
    const obj = require("00123_polyfillObjectProperty.js") /* polyfillObjectProperty */;
    require("00123_polyfillObjectProperty.js") /* polyfillObjectProperty */.polyfillGlobal("MutationRecord", () => callback(270).default);
    const obj2 = require("00123_polyfillObjectProperty.js") /* polyfillObjectProperty */;
  }
};