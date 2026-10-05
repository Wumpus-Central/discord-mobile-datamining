// _runtime/05325_getPolyfill.js
import requirePromise from "05324_requirePromise.js";
import allSettled2 from "05326_allSettled.js";

export default function getPolyfill() {
  let allSettled;
  requirePromise();
  if (typeof Promise.allSettled === "function") {
    allSettled = Promise.allSettled;
  } else {
    allSettled = allSettled2;
  }
  return allSettled;
}
