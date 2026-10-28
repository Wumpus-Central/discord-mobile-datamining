// === Module 6421: ? ===

// Module 6421
import requirePromise from "requirePromise" /* 6420 */;
import _mod6422 from "module_6422" /* 6422 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod6422;
  }
  return allSettled;
};