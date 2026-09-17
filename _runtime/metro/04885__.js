// _runtime/metro/04885__.js
import requirePromise from "../04884_requirePromise.js";
import _mod4886 from "04886__.js";

export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod4886;
  }
  return allSettled;
}
