// _runtime/04544_getPolyfill.js
import { requirePromise } from "04543_requirePromise.js";
import { allSettled } from "04545_allSettled.js";

export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = allSettled;
  }
  return allSettled;
};