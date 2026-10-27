// _runtime/metro/06387__.js
import requirePromise from "../06386_requirePromise.js";
import _mod6388 from "06388__.js";

export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod6388;
  }
  return allSettled;
}
