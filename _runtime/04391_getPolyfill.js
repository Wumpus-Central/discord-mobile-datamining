// _runtime/04391_getPolyfill.js
import requirePromise from "04390_requirePromise.js";
import allSettled2 from "04392_allSettled.js";


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = allSettled2;
  }
  return allSettled;
};