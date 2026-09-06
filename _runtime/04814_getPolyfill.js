// _runtime/04814_getPolyfill.js
import properlyBoxed from "04815_properlyBoxed.js";
import map2 from "04816_map.js";

export default function getPolyfill() {
  if (!properlyBoxed(map)) {
    map = map2;
  }
  return map;
}
