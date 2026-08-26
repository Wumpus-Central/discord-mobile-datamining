// _runtime/04710_getPolyfill.js
import requirePromise from "04709_requirePromise.js";
import allSettled2 from "04711_allSettled.js";


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = allSettled2;
  }
  return allSettled;
};