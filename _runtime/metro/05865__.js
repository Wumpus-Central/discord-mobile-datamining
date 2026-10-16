// _runtime/metro/05865__.js
import requirePromise from "../05864_requirePromise.js";
import _mod5866 from "05866__.js";

export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod5866;
  }
  return allSettled;
}
