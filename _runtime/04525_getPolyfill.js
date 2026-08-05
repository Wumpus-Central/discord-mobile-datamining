// _runtime/04525_getPolyfill.js
import { requirePromise } from "04524_requirePromise.js";
import { allSettled } from "04526_allSettled.js";

export default function getPolyfill() {
  requirePromise /* requirePromise */();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = allSettled /* allSettled */;
  }
  return allSettled;
};