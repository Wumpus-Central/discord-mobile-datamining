// _runtime/04733_getPolyfill.js
import properlyBoxed from "04734_properlyBoxed.js";
import map2 from "04735_map.js";


export default function getPolyfill() {
  if (!properlyBoxed(map)) {
    map = map2;
  }
  return map;
};