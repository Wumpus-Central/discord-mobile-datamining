// _runtime/metro/06371__.js
import requirePromise from "../06370_requirePromise.js";
import _mod6372 from "06372__.js";

export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod6372;
  }
  return allSettled;
}
