// === Module 5866: ? ===

// Module 5866
import requirePromise from "requirePromise" /* 5865 */;
import _mod5867 from "module_5867" /* 5867 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod5867;
  }
  return allSettled;
};