// === Module 5717: shimArrayPrototypeMap ===

// Module 5717 (shimArrayPrototypeMap)
import properlyBoxed from "properlyBoxed" /* 5652 */;
import _mod5671 from "module_5671" /* 5671 */;


export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod5671(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};