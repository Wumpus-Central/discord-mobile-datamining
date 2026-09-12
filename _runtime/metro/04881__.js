// _runtime/metro/04881__.js
import requirePromise from "../04880_requirePromise.js";
import _mod4882 from "04882__.js";

export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod4882;
  }
  return allSettled;
}
