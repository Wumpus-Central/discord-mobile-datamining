// _runtime/04719_getPolyfill.js
import properlyBoxed from "04720_properlyBoxed.js";
import map2 from "04721_map.js";


export default function getPolyfill() {
  if (!properlyBoxed(map)) {
    map = map2;
  }
  return map;
};