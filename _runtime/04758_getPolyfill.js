// === Module 4758: getPolyfill ===

// Module 4758 (getPolyfill)
import requirePromise from "requirePromise" /* 4757 */;
import allSettled2 from "allSettled" /* 4759 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = allSettled2;
  }
  return allSettled;
};