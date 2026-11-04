// _runtime/06602_properlyBoxed.js
import _mod6603 from "metro/06603__.js";
import _mod6604 from "metro/06604__.js";

export default function getPolyfill() {
  if (!_mod6603(map)) {
    map = _mod6604;
  }
  return map;
}
