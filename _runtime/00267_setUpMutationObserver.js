// === Module 267: setUpMutationObserver ===

// Module 267 (setUpMutationObserver)
const require = arg1;
const dependencyMap = arg6;
let c2 = false;
arg5.default = function setUpMutationObserver() {
  if (!c2) {
    c2 = true;
    require(123) /* polyfillObjectProperty */.polyfillGlobal("MutationObserver", () => callback(268).default);
    const obj = require(123) /* polyfillObjectProperty */;
    require(123) /* polyfillObjectProperty */.polyfillGlobal("MutationRecord", () => callback(270).default);
    const obj2 = require(123) /* polyfillObjectProperty */;
  }
};