// === Module 5652: ? ===

// Module 5652
import requirePromise from "requirePromise" /* 5651 */;
import _mod5653 from "module_5653" /* 5653 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod5653;
  }
  return allSettled;
};