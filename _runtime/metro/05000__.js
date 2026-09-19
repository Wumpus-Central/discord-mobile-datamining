// _runtime/metro/05000__.js
import requirePromise from "../04999_requirePromise.js";
import _mod5001 from "05001__.js";

export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod5001;
  }
  return allSettled;
}
