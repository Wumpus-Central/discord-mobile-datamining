// _runtime/metro/06365__.js
import requirePromise from "../06364_requirePromise.js";
import _mod6366 from "06366__.js";

export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod6366;
  }
  return allSettled;
}
