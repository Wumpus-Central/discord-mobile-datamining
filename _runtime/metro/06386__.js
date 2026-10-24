// _runtime/metro/06386__.js
import requirePromise from "../06385_requirePromise.js";
import _mod6387 from "06387__.js";

export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod6387;
  }
  return allSettled;
}
