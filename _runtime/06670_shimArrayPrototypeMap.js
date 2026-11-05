// === Module 6670: shimArrayPrototypeMap ===

// Module 6670 (shimArrayPrototypeMap)
import properlyBoxed from "properlyBoxed" /* 6605 */;
import _mod6624 from "module_6624" /* 6624 */;


export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod6624(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};