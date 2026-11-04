// === Module 6593: ? ===

// Module 6593
import requirePromise from "requirePromise" /* 6592 */;
import _mod6594 from "module_6594" /* 6594 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod6594;
  }
  return allSettled;
};