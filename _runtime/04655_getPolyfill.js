// _runtime/04655_getPolyfill.js
import properlyBoxed from "04656_properlyBoxed.js";
import map2 from "04657_map.js";


export default function getPolyfill() {
  if (!properlyBoxed(map)) {
    map = map2;
  }
  return map;
};