// === Module 4814: getPolyfill ===

// Module 4814 (getPolyfill)
import properlyBoxed from "properlyBoxed" /* 4815 */;
import map2 from "map" /* 4816 */;


export default function getPolyfill() {
  if (!properlyBoxed(map)) {
    map = map2;
  }
  return map;
};