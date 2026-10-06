// === Module 5332: getPolyfill ===

// Module 5332 (getPolyfill)
import requirePromise from "requirePromise" /* 5331 */;
import allSettled2 from "allSettled" /* 5333 */;


export default function getPolyfill() {
  let allSettled;
  requirePromise();
  if (typeof Promise.allSettled === "function") {
    allSettled = Promise.allSettled;
  } else {
    allSettled = allSettled2;
  }
  return allSettled;
};