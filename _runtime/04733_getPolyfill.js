// === Module 4733: getPolyfill ===

// Module 4733 (getPolyfill)
import properlyBoxed from "properlyBoxed" /* 4734 */;
import map2 from "map" /* 4735 */;


export default function getPolyfill() {
  if (!properlyBoxed(map)) {
    map = map2;
  }
  return map;
};