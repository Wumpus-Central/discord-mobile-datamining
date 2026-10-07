// === Module 5332: ? ===

// Module 5332
import requirePromise from "requirePromise" /* 5331 */;
import _mod5333 from "module_5333" /* 5333 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod5333;
  }
  return allSettled;
};