// _runtime/metro/05088__.js
import requirePromise from "../05087_requirePromise.js";
import _mod5089 from "05089__.js";

export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod5089;
  }
  return allSettled;
}
