// === Module 5169: shimArrayPrototypeMap ===

// Module 5169 (shimArrayPrototypeMap)
import properlyBoxed from "properlyBoxed" /* 5104 */;
import _mod5123 from "module_5123" /* 5123 */;


export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod5123(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};