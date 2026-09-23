// _runtime/metro/05085__.js
import requirePromise from "../05084_requirePromise.js";
import _mod5086 from "05086__.js";

export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod5086;
  }
  return allSettled;
}
