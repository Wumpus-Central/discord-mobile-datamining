// === Module 6578: ? ===

// Module 6578
import requirePromise from "requirePromise" /* 6577 */;
import _mod6579 from "module_6579" /* 6579 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod6579;
  }
  return allSettled;
};