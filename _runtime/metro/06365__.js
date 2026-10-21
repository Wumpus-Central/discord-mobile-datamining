// === Module 6365: ? ===

// Module 6365
import requirePromise from "requirePromise" /* 6364 */;
import _mod6366 from "module_6366" /* 6366 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod6366;
  }
  return allSettled;
};