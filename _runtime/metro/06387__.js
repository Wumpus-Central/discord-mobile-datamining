// === Module 6387: ? ===

// Module 6387
import requirePromise from "requirePromise" /* 6386 */;
import _mod6388 from "module_6388" /* 6388 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod6388;
  }
  return allSettled;
};