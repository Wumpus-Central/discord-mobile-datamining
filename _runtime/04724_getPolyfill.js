// _runtime/04724_getPolyfill.js
import requirePromise from "04723_requirePromise.js";
import allSettled2 from "04725_allSettled.js";


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = allSettled2;
  }
  return allSettled;
};