// === Module 262: ? ===

// Module 262
import polyfillObjectProperty from "polyfillObjectProperty" /* 123 */;

require = arg1;
const dependencyMap = arg6;
let c2 = false;

export default function setUpIntersectionObserver() {
  if (!c2) {
    c2 = true;
    polyfillObjectProperty.polyfillGlobal("IntersectionObserver", () => require("IntersectionObserver").default);
  }
};