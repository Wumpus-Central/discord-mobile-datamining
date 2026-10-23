// _runtime/metro/06384__.js
import requirePromise from "../06383_requirePromise.js";
import _mod6385 from "06385__.js";

export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod6385;
  }
  return allSettled;
}
