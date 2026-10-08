// _runtime/metro/05643__.js
import requirePromise from "../05642_requirePromise.js";
import _mod5644 from "05644__.js";

export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod5644;
  }
  return allSettled;
}
