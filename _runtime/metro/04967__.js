// === Module 4967: ? ===

// Module 4967
import requirePromise from "requirePromise" /* 4966 */;
import _mod4968 from "module_4968" /* 4968 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod4968;
  }
  return allSettled;
};