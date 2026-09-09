// === Module 4819: ? ===

// Module 4819
import requirePromise from "requirePromise" /* 4818 */;
import _mod4820 from "module_4820" /* 4820 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod4820;
  }
  return allSettled;
};