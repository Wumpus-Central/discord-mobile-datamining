// === Module 6652: shimArrayPrototypeMap ===

// Module 6652 (shimArrayPrototypeMap)
import properlyBoxed from "properlyBoxed" /* 6587 */;
import _mod6606 from "module_6606" /* 6606 */;


export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod6606(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};