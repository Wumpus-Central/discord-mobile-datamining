// === Module 4885: ? ===

// Module 4885
import requirePromise from "requirePromise" /* 4884 */;
import _mod4886 from "module_4886" /* 4886 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod4886;
  }
  return allSettled;
};