// === Module 5009: properlyBoxed ===

// Module 5009 (properlyBoxed)
import _mod5010 from "module_5010" /* 5010 */;
import _mod5011 from "module_5011" /* 5011 */;


export default function getPolyfill() {
  if (!_mod5010(map)) {
    map = _mod5011;
  }
  return map;
};