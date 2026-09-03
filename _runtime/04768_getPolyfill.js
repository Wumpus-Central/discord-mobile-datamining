// _runtime/04768_getPolyfill.js
import properlyBoxed from "04769_properlyBoxed.js";
import map2 from "04770_map.js";

export default function getPolyfill() {
  if (!properlyBoxed(map)) {
    map = map2;
  }
  return map;
}
