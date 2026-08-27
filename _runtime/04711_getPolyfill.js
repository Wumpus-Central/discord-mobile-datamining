// === Module 4711: getPolyfill ===

// Module 4711 (getPolyfill)
import requirePromise from "requirePromise" /* 4710 */;
import allSettled2 from "allSettled" /* 4712 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = allSettled2;
  }
  return allSettled;
};