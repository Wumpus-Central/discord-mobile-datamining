// _runtime/metro/06343__.js
import requirePromise from "../06342_requirePromise.js";
import _mod6344 from "06344__.js";

export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod6344;
  }
  return allSettled;
}
