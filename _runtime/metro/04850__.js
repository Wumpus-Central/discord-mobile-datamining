// _runtime/metro/04850__.js
import requirePromise from "../04849_requirePromise.js";
import _mod4851 from "04851__.js";

export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod4851;
  }
  return allSettled;
}
