// _runtime/04711_getPolyfill.js
import requirePromise from "04710_requirePromise.js";
import allSettled2 from "04712_allSettled.js";


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = allSettled2;
  }
  return allSettled;
};