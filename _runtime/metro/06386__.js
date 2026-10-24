// === Module 6386: ? ===

// Module 6386
import requirePromise from "requirePromise" /* 6385 */;
import _mod6387 from "module_6387" /* 6387 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod6387;
  }
  return allSettled;
};