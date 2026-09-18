// _runtime/metro/04967__.js
import requirePromise from "../04966_requirePromise.js";
import _mod4968 from "04968__.js";

export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod4968;
  }
  return allSettled;
}
