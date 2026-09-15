// _runtime/metro/04884__.js
import requirePromise from "../04883_requirePromise.js";
import _mod4885 from "04885__.js";

export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod4885;
  }
  return allSettled;
}
