// _runtime/metro/04851__.js
import requirePromise from "../04850_requirePromise.js";
import _mod4852 from "04852__.js";

export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod4852;
  }
  return allSettled;
}
