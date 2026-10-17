// === Module 5903: ? ===

// Module 5903
import requirePromise from "requirePromise" /* 5902 */;
import _mod5904 from "module_5904" /* 5904 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod5904;
  }
  return allSettled;
};