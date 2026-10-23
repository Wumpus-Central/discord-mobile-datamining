// === Module 6371: ? ===

// Module 6371
import requirePromise from "requirePromise" /* 6370 */;
import _mod6372 from "module_6372" /* 6372 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod6372;
  }
  return allSettled;
};