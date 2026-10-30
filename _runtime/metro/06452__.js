// === Module 6452: ? ===

// Module 6452
import requirePromise from "requirePromise" /* 6451 */;
import _mod6453 from "module_6453" /* 6453 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod6453;
  }
  return allSettled;
};