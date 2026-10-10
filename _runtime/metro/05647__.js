// === Module 5647: ? ===

// Module 5647
import requirePromise from "requirePromise" /* 5646 */;
import _mod5648 from "module_5648" /* 5648 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod5648;
  }
  return allSettled;
};