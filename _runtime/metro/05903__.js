// _runtime/metro/05903__.js
import requirePromise from "../05902_requirePromise.js";
import _mod5904 from "05904__.js";

export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod5904;
  }
  return allSettled;
}
