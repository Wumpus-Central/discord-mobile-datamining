// _runtime/04387_getPolyfill.js
import { requirePromise } from "04386_requirePromise.js";
import { allSettled } from "04388_allSettled.js";

export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = allSettled;
  }
  return allSettled;
};