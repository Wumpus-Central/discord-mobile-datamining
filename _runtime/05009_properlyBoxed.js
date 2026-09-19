// _runtime/05009_properlyBoxed.js
import _mod5010 from "metro/05010__.js";
import _mod5011 from "metro/05011__.js";

export default function getPolyfill() {
  if (!_mod5010(map)) {
    map = _mod5011;
  }
  return map;
}
