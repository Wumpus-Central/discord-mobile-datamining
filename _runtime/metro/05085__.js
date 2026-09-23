// === Module 5085: ? ===

// Module 5085
import requirePromise from "requirePromise" /* 5084 */;
import _mod5086 from "module_5086" /* 5086 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod5086;
  }
  return allSettled;
};