// === Module 5325: ? ===

// Module 5325
import requirePromise from "requirePromise" /* 5324 */;
import _mod5326 from "module_5326" /* 5326 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod5326;
  }
  return allSettled;
};