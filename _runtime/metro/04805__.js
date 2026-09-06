// === Module 4805: ? ===

// Module 4805
import requirePromise from "requirePromise" /* 4804 */;
import _mod4806 from "module_4806" /* 4806 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod4806;
  }
  return allSettled;
};