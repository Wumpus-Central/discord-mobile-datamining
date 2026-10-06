// === Module 5341: getPolyfill ===

// Module 5341 (getPolyfill)
import properlyBoxed from "properlyBoxed" /* 5342 */;
import _mod5343 from "module_5343" /* 5343 */;

let map;


export default function getPolyfill() {
  map = Array.prototype.map;
  if (!properlyBoxed(map)) {
    map = _mod5343;
  }
  return map;
};