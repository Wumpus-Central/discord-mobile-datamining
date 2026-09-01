// _runtime/04767_getPolyfill.js
import properlyBoxed from "04768_properlyBoxed.js";
import map2 from "04769_map.js";

export default function getPolyfill() {
  if (!properlyBoxed(map)) {
    map = map2;
  }
  return map;
}
