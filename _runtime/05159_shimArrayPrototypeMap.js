// === Module 5159: shimArrayPrototypeMap ===

// Module 5159 (shimArrayPrototypeMap)
import properlyBoxed from "properlyBoxed" /* 5094 */;
import _mod5113 from "module_5113" /* 5113 */;


export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod5113(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};