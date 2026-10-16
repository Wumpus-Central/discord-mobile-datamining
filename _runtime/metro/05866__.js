// _runtime/metro/05866__.js
import requirePromise from "../05865_requirePromise.js";
import _mod5867 from "05867__.js";

export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod5867;
  }
  return allSettled;
}
