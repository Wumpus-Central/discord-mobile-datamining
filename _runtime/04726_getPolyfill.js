// _runtime/04726_getPolyfill.js
import requirePromise from "04725_requirePromise.js";
import allSettled2 from "04727_allSettled.js";


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = allSettled2;
  }
  return allSettled;
};