// _runtime/metro/06452__.js
import requirePromise from "../06451_requirePromise.js";
import _mod6453 from "06453__.js";

export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod6453;
  }
  return allSettled;
}
