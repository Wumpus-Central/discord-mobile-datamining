// _runtime/04396_getPolyfill.js
import properlyBoxed from "04397_properlyBoxed.js";
import map2 from "04398_map.js";


export default function getPolyfill() {
  if (!properlyBoxed(map)) {
    map = map2;
  }
  return map;
};