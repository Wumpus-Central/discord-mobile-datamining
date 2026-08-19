// === Module 267: setUpMutationObserver ===

// Module 267 (setUpMutationObserver)
import polyfillObjectProperty from "polyfillObjectProperty" /* 123 */;

require = arg1;
const dependencyMap = arg6;
let c2 = false;
arg5.default = function setUpMutationObserver() {
  if (!c2) {
    c2 = true;
    polyfillObjectProperty.polyfillGlobal("MutationObserver", () => callback(268).default);
    polyfillObjectProperty.polyfillGlobal("MutationRecord", () => callback(270).default);
  }
};