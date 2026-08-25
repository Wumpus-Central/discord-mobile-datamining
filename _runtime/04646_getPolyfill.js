// === Module 4646: getPolyfill ===

// Module 4646 (getPolyfill)
import requirePromise from "requirePromise" /* 4645 */;
import allSettled2 from "allSettled" /* 4647 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = allSettled2;
  }
  return allSettled;
};