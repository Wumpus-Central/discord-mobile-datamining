// === Module 267: setUpMutationObserver ===

// Module 267 (setUpMutationObserver)
import defineLazyObjectProperty from "defineLazyObjectProperty" /* 123 */;

const require = globalThis.__r;

let c2 = false;

export default function setUpMutationObserver() {
  const tmp = c2;
  if (!tmp) {
    c2 = true;
    const obj = defineLazyObjectProperty;
    obj.polyfillGlobal("MutationObserver", () => require("module_268").default);
    const obj2 = defineLazyObjectProperty;
    obj2.polyfillGlobal("MutationRecord", () => require("module_270").default);
  }
};