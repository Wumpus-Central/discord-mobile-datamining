import { polyfillObjectProperty } from "00123_polyfillObjectProperty.js";
// _runtime/00267_setUpMutationObserver.js
const require = arg1;
const dependencyMap = arg6;
let c2 = false;
arg5.default = function setUpMutationObserver() {
  if (!c2) {
    c2 = true;
    polyfillObjectProperty /* polyfillObjectProperty */.polyfillGlobal("MutationObserver", () => callback(268).default);
    const obj = polyfillObjectProperty /* polyfillObjectProperty */;
    polyfillObjectProperty /* polyfillObjectProperty */.polyfillGlobal("MutationRecord", () => callback(270).default);
    const obj2 = polyfillObjectProperty /* polyfillObjectProperty */;
  }
};