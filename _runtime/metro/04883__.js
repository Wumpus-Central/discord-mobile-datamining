// _runtime/metro/04883__.js
import requirePromise from "../04882_requirePromise.js";
import _mod4884 from "04884__.js";

export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod4884;
  }
  return allSettled;
}
