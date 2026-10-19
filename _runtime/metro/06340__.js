// _runtime/metro/06340__.js
import requirePromise from "../06339_requirePromise.js";
import _mod6341 from "06341__.js";

export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod6341;
  }
  return allSettled;
}
