// === Module 5865: ? ===

// Module 5865
import requirePromise from "requirePromise" /* 5864 */;
import _mod5866 from "module_5866" /* 5866 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod5866;
  }
  return allSettled;
};