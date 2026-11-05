// _runtime/metro/06596__.js
import requirePromise from "../06595_requirePromise.js";
import _mod6597 from "06597__.js";

export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod6597;
  }
  return allSettled;
}
