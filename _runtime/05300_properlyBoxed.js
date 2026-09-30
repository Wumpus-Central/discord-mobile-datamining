// _runtime/05300_properlyBoxed.js
import _mod5301 from "metro/05301__.js";
import _mod5302 from "metro/05302__.js";

export default function getPolyfill() {
  if (!_mod5301(map)) {
    map = _mod5302;
  }
  return map;
}
