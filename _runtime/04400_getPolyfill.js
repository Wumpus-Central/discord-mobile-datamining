// _runtime/04400_getPolyfill.js
import properlyBoxed from "04401_properlyBoxed.js";
import map2 from "04402_map.js";


export default function getPolyfill() {
  if (!properlyBoxed(map)) {
    map = map2;
  }
  return map;
};