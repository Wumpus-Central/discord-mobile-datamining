// _runtime/05104_properlyBoxed.js
import _mod5105 from "metro/05105__.js";
import _mod5106 from "metro/05106__.js";

export default function getPolyfill() {
  if (!_mod5105(map)) {
    map = _mod5106;
  }
  return map;
}
