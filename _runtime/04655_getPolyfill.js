// === Module 4655: getPolyfill ===

// Module 4655 (getPolyfill)
import properlyBoxed from "properlyBoxed" /* 4656 */;
import map2 from "map" /* 4657 */;


export default function getPolyfill() {
  if (!properlyBoxed(map)) {
    map = map2;
  }
  return map;
};