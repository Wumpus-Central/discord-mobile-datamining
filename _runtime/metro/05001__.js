// _runtime/metro/05001__.js
import requirePromise from "../05000_requirePromise.js";
import _mod5002 from "05002__.js";

export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod5002;
  }
  return allSettled;
}
