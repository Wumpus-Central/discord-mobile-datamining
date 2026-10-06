// _runtime/05341_getPolyfill.js
import properlyBoxed from "05342_properlyBoxed.js";
import _mod5343 from "metro/05343__.js";

let map;

export default function getPolyfill() {
  map = Array.prototype.map;
  if (!properlyBoxed(map)) {
    map = _mod5343;
  }
  return map;
}
