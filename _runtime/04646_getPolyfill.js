// _runtime/04646_getPolyfill.js
import requirePromise from "04645_requirePromise.js";
import allSettled2 from "04647_allSettled.js";


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = allSettled2;
  }
  return allSettled;
};