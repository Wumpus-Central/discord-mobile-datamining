// _runtime/04542_getPolyfill.js
import { requirePromise } from "04541_requirePromise.js";
import { allSettled } from "04543_allSettled.js";

export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = allSettled;
  }
  return allSettled;
};