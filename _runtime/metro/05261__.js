// _runtime/metro/05261__.js
import requirePromise from "../05260_requirePromise.js";
import _mod5262 from "05262__.js";

export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod5262;
  }
  return allSettled;
}
