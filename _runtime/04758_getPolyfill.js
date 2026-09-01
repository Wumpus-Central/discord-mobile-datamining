// _runtime/04758_getPolyfill.js
import requirePromise from "04757_requirePromise.js";
import allSettled2 from "04759_allSettled.js";


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = allSettled2;
  }
  return allSettled;
};