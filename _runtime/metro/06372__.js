// === Module 6372: ? ===

// Module 6372
import requirePromise from "requirePromise" /* 6371 */;
import _mod6373 from "module_6373" /* 6373 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod6373;
  }
  return allSettled;
};