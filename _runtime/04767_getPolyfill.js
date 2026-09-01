// === Module 4767: getPolyfill ===

// Module 4767 (getPolyfill)
import properlyBoxed from "properlyBoxed" /* 4768 */;
import map2 from "map" /* 4769 */;


export default function getPolyfill() {
  if (!properlyBoxed(map)) {
    map = map2;
  }
  return map;
};