// _runtime/metro/05647__.js
import requirePromise from "../05646_requirePromise.js";
import _mod5648 from "05648__.js";

export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod5648;
  }
  return allSettled;
}
