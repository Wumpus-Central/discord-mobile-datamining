// _runtime/metro/05291__.js
import requirePromise from "../05290_requirePromise.js";
import _mod5292 from "05292__.js";

export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod5292;
  }
  return allSettled;
}
