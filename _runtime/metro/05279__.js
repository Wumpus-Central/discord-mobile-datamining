// _runtime/metro/05279__.js
import requirePromise from "../05278_requirePromise.js";
import _mod5280 from "05280__.js";

export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod5280;
  }
  return allSettled;
}
