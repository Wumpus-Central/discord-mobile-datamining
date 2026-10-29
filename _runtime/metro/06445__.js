// === Module 6445: ? ===

// Module 6445
import requirePromise from "requirePromise" /* 6444 */;
import _mod6446 from "module_6446" /* 6446 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod6446;
  }
  return allSettled;
};