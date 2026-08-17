// _runtime/04387_getPolyfill.js
import requirePromise from "requirePromise" /* 4386 */;
import allSettled2 from "allSettled" /* 4388 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = allSettled2;
  }
  return allSettled;
};