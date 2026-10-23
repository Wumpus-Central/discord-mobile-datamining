// === Module 6458: shimArrayPrototypeMap ===

// Module 6458 (shimArrayPrototypeMap)
import properlyBoxed from "properlyBoxed" /* 6393 */;
import _mod6412 from "module_6412" /* 6412 */;


export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod6412(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};