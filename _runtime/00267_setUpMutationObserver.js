// _runtime/00267_setUpMutationObserver.js
import { polyfillObjectProperty } from "00123_polyfillObjectProperty.js";
const require = arg1;
const dependencyMap = arg6;
let c2 = false;
arg5.default = function setUpMutationObserver() {
  if (!c2) {
    c2 = true;
    polyfillObjectProperty.polyfillGlobal("MutationObserver", () => callback(268).default);
    const obj = polyfillObjectProperty;
    polyfillObjectProperty.polyfillGlobal("MutationRecord", () => callback(270).default);
    const obj2 = polyfillObjectProperty;
  }
};