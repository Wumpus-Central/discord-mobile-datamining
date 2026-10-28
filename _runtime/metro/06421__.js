// _runtime/metro/06421__.js
import requirePromise from "../06420_requirePromise.js";
import _mod6422 from "06422__.js";

export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod6422;
  }
  return allSettled;
}
