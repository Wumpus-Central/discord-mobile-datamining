// _runtime/04584_getPolyfill.js
import { requirePromise } from "04583_requirePromise.js";
import { allSettled } from "04585_allSettled.js";

export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = allSettled;
  }
  return allSettled;
};