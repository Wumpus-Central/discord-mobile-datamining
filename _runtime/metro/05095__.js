// _runtime/metro/05095__.js
import requirePromise from "../05094_requirePromise.js";
import _mod5096 from "05096__.js";

export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod5096;
  }
  return allSettled;
}
