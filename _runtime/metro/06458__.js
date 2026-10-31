// === Module 6458: ? ===

// Module 6458
import requirePromise from "requirePromise" /* 6457 */;
import _mod6459 from "module_6459" /* 6459 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod6459;
  }
  return allSettled;
};