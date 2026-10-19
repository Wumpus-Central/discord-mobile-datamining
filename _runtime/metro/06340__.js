// === Module 6340: ? ===

// Module 6340
import requirePromise from "requirePromise" /* 6339 */;
import _mod6341 from "module_6341" /* 6341 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod6341;
  }
  return allSettled;
};