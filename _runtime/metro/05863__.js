// === Module 5863: ? ===

// Module 5863
import requirePromise from "requirePromise" /* 5862 */;
import _mod5864 from "module_5864" /* 5864 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod5864;
  }
  return allSettled;
};