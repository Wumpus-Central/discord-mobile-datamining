// === Module 4759: getPolyfill ===

// Module 4759 (getPolyfill)
import requirePromise from "requirePromise" /* 4758 */;
import allSettled2 from "allSettled" /* 4760 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = allSettled2;
  }
  return allSettled;
};