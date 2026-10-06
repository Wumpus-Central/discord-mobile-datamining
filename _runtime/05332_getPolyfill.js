// _runtime/05332_getPolyfill.js
import requirePromise from "05331_requirePromise.js";
import allSettled2 from "05333_allSettled.js";

export default function getPolyfill() {
  let allSettled;
  requirePromise();
  if (typeof Promise.allSettled === "function") {
    allSettled = Promise.allSettled;
  } else {
    allSettled = allSettled2;
  }
  return allSettled;
}
