// _runtime/04495_getPolyfill.js
import { requirePromise } from "04494_requirePromise.js";
import { allSettled } from "04496_allSettled.js";

export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = allSettled;
  }
  return allSettled;
};