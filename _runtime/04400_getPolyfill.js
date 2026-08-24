// === Module 4400: getPolyfill ===

// Module 4400 (getPolyfill)
import properlyBoxed from "properlyBoxed" /* 4401 */;
import map2 from "map" /* 4402 */;


export default function getPolyfill() {
  if (!properlyBoxed(map)) {
    map = map2;
  }
  return map;
};