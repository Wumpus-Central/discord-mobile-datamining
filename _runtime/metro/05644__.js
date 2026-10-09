// === Module 5644: ? ===

// Module 5644
import requirePromise from "requirePromise" /* 5643 */;
import _mod5645 from "module_5645" /* 5645 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod5645;
  }
  return allSettled;
};