// === Module 6596: ? ===

// Module 6596
import requirePromise from "requirePromise" /* 6595 */;
import _mod6597 from "module_6597" /* 6597 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod6597;
  }
  return allSettled;
};