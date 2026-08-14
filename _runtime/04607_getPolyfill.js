// _runtime/04607_getPolyfill.js
import { requirePromise } from "04606_requirePromise.js";
import { allSettled } from "04608_allSettled.js";

export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = allSettled;
  }
  return allSettled;
};