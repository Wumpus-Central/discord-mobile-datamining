// _runtime/metro/06578__.js
import requirePromise from "../06577_requirePromise.js";
import _mod6579 from "06579__.js";

export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod6579;
  }
  return allSettled;
}
