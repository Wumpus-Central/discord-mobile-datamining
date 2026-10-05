// === Module 5334: getPolyfill ===

// Module 5334 (getPolyfill)
import properlyBoxed from "properlyBoxed" /* 5335 */;
import _mod5336 from "module_5336" /* 5336 */;

let map;


export default function getPolyfill() {
  map = Array.prototype.map;
  if (!properlyBoxed(map)) {
    map = _mod5336;
  }
  return map;
};