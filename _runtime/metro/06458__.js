// _runtime/metro/06458__.js
import requirePromise from "../06457_requirePromise.js";
import _mod6459 from "06459__.js";

export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod6459;
  }
  return allSettled;
}
