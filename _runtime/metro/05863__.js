// _runtime/metro/05863__.js
import requirePromise from "../05862_requirePromise.js";
import _mod5864 from "05864__.js";

export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod5864;
  }
  return allSettled;
}
