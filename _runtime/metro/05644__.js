// _runtime/metro/05644__.js
import requirePromise from "../05643_requirePromise.js";
import _mod5645 from "05645__.js";

export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod5645;
  }
  return allSettled;
}
