// === Module 4720: getPolyfill ===

// Module 4720 (getPolyfill)
import properlyBoxed from "properlyBoxed" /* 4721 */;
import map2 from "map" /* 4722 */;


export default function getPolyfill() {
  if (!properlyBoxed(map)) {
    map = map2;
  }
  return map;
};