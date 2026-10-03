// === Module 5399: shimArrayPrototypeMap ===

// Module 5399 (shimArrayPrototypeMap)
import properlyBoxed from "properlyBoxed" /* 5334 */;
import _mod5353 from "module_5353" /* 5353 */;


export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod5353(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};