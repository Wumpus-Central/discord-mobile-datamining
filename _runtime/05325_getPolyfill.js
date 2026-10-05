// === Module 5325: getPolyfill ===

// Module 5325 (getPolyfill)
import requirePromise from "requirePromise" /* 5324 */;
import allSettled2 from "allSettled" /* 5326 */;


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