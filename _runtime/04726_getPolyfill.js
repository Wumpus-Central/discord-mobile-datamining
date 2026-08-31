// === Module 4726: getPolyfill ===

// Module 4726 (getPolyfill)
import requirePromise from "requirePromise" /* 4725 */;
import allSettled2 from "allSettled" /* 4727 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = allSettled2;
  }
  return allSettled;
};