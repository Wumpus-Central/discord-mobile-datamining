// _runtime/metro/06372__.js
import requirePromise from "../06371_requirePromise.js";
import _mod6373 from "06373__.js";

export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod6373;
  }
  return allSettled;
}
