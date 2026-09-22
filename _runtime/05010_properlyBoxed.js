// _runtime/05010_properlyBoxed.js
import _mod5011 from "metro/05011__.js";
import _mod5012 from "metro/05012__.js";

export default function getPolyfill() {
  if (!_mod5011(map)) {
    map = _mod5012;
  }
  return map;
}
