// === Module 5001: ? ===

// Module 5001
import requirePromise from "requirePromise" /* 5000 */;
import _mod5002 from "module_5002" /* 5002 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod5002;
  }
  return allSettled;
};