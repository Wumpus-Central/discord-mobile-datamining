// _runtime/metro/04805__.js
import requirePromise from "../04804_requirePromise.js";
import _mod4806 from "04806__.js";

export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod4806;
  }
  return allSettled;
}
