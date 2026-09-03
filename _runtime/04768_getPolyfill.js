// === Module 4768: getPolyfill ===

// Module 4768 (getPolyfill)
import properlyBoxed from "properlyBoxed" /* 4769 */;
import map2 from "map" /* 4770 */;


export default function getPolyfill() {
  if (!properlyBoxed(map)) {
    map = map2;
  }
  return map;
};