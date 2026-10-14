// _runtime/metro/05652__.js
import requirePromise from "../05651_requirePromise.js";
import _mod5653 from "05653__.js";

export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod5653;
  }
  return allSettled;
}
