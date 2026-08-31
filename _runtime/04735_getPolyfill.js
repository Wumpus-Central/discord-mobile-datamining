// === Module 4735: getPolyfill ===

// Module 4735 (getPolyfill)
import properlyBoxed from "properlyBoxed" /* 4736 */;
import map2 from "map" /* 4737 */;


export default function getPolyfill() {
  if (!properlyBoxed(map)) {
    map = map2;
  }
  return map;
};