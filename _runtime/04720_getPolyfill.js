// _runtime/04720_getPolyfill.js
import properlyBoxed from "04721_properlyBoxed.js";
import map2 from "04722_map.js";


export default function getPolyfill() {
  if (!properlyBoxed(map)) {
    map = map2;
  }
  return map;
};