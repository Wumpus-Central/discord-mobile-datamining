// _runtime/04759_getPolyfill.js
import requirePromise from "04758_requirePromise.js";
import allSettled2 from "04760_allSettled.js";

export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = allSettled2;
  }
  return allSettled;
}
