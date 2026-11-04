// _runtime/metro/06593__.js
import requirePromise from "../06592_requirePromise.js";
import _mod6594 from "06594__.js";

export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod6594;
  }
  return allSettled;
}
