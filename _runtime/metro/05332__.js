// _runtime/metro/05332__.js
import requirePromise from "../05331_requirePromise.js";
import _mod5333 from "05333__.js";

export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod5333;
  }
  return allSettled;
}
