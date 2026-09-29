// === Module 5261: ? ===

// Module 5261
import requirePromise from "requirePromise" /* 5260 */;
import _mod5262 from "module_5262" /* 5262 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod5262;
  }
  return allSettled;
};