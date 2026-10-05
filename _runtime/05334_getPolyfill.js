// _runtime/05334_getPolyfill.js
import properlyBoxed from "05335_properlyBoxed.js";
import _mod5336 from "metro/05336__.js";

let map;

export default function getPolyfill() {
  map = Array.prototype.map;
  if (!properlyBoxed(map)) {
    map = _mod5336;
  }
  return map;
}
