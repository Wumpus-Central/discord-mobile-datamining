// _runtime/04585_getPolyfill.js
import { requirePromise } from "04584_requirePromise.js";
import { allSettled } from "04586_allSettled.js";

export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = allSettled;
  }
  return allSettled;
};