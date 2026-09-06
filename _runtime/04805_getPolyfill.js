// _runtime/04805_getPolyfill.js
import requirePromise from "04804_requirePromise.js";
import allSettled2 from "04806_allSettled.js";

export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = allSettled2;
  }
  return allSettled;
}
