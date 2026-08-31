// _runtime/04735_getPolyfill.js
import properlyBoxed from "04736_properlyBoxed.js";
import map2 from "04737_map.js";


export default function getPolyfill() {
  if (!properlyBoxed(map)) {
    map = map2;
  }
  return map;
};