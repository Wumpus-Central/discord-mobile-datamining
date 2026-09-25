// === Module 5088: ? ===

// Module 5088
import requirePromise from "requirePromise" /* 5087 */;
import _mod5089 from "module_5089" /* 5089 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod5089;
  }
  return allSettled;
};