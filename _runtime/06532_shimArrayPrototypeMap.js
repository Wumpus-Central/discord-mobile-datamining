// === Module 6532: shimArrayPrototypeMap ===

// Module 6532 (shimArrayPrototypeMap)
import properlyBoxed from "properlyBoxed" /* 6467 */;
import _mod6486 from "module_6486" /* 6486 */;


export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod6486(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};