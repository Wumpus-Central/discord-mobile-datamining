// === Module 4396: getPolyfill ===

// Module 4396 (getPolyfill)
import properlyBoxed from "properlyBoxed" /* 4397 */;
import map2 from "map" /* 4398 */;


export default function getPolyfill() {
  if (!properlyBoxed(map)) {
    map = map2;
  }
  return map;
};