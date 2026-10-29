// _runtime/metro/06445__.js
import requirePromise from "../06444_requirePromise.js";
import _mod6446 from "06446__.js";

export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod6446;
  }
  return allSettled;
}
