// === Module 6384: ? ===

// Module 6384
import requirePromise from "requirePromise" /* 6383 */;
import _mod6385 from "module_6385" /* 6385 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod6385;
  }
  return allSettled;
};