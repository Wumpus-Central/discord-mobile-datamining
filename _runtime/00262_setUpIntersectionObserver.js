// === Module 262: setUpIntersectionObserver ===

// Module 262 (setUpIntersectionObserver)
import defineLazyObjectProperty from "defineLazyObjectProperty" /* 123 */;

const require = globalThis.__r;

let c2 = false;

export default function setUpIntersectionObserver() {
  const tmp = c2;
  if (!tmp) {
    c2 = true;
    const obj = defineLazyObjectProperty;
    obj.polyfillGlobal("IntersectionObserver", () => require("module_263").default);
  }
};