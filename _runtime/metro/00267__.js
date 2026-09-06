// === Module 267: ? ===

// Module 267
import polyfillObjectProperty from "polyfillObjectProperty" /* 123 */;

require = arg1;
const dependencyMap = arg6;
let c2 = false;

export default function setUpMutationObserver() {
  if (!c2) {
    c2 = true;
    polyfillObjectProperty.polyfillGlobal("MutationObserver", () => require("MutationObserver").default);
    polyfillObjectProperty.polyfillGlobal("MutationRecord", () => require("MutationRecord").default);
  }
};