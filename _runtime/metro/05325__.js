// _runtime/metro/05325__.js
import requirePromise from "../05324_requirePromise.js";
import _mod5326 from "05326__.js";

export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod5326;
  }
  return allSettled;
}
