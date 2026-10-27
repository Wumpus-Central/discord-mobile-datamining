// === Module 6461: shimArrayPrototypeMap ===

// Module 6461 (shimArrayPrototypeMap)
import properlyBoxed from "properlyBoxed" /* 6396 */;
import _mod6415 from "module_6415" /* 6415 */;


export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod6415(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};