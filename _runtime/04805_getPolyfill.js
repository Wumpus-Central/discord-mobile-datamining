// === Module 4805: getPolyfill ===

// Module 4805 (getPolyfill)
import requirePromise from "requirePromise" /* 4804 */;
import allSettled2 from "allSettled" /* 4806 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = allSettled2;
  }
  return allSettled;
};