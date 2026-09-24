// _runtime/metro/05087__.js
import requirePromise from "../05086_requirePromise.js";
import _mod5088 from "05088__.js";

export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod5088;
  }
  return allSettled;
}
