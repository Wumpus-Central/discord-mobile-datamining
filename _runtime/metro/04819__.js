// _runtime/metro/04819__.js
import requirePromise from "../04818_requirePromise.js";
import _mod4820 from "04820__.js";

export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod4820;
  }
  return allSettled;
}
