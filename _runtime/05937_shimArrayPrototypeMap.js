// === Module 5937: shimArrayPrototypeMap ===

// Module 5937 (shimArrayPrototypeMap)
import properlyBoxed from "properlyBoxed" /* 5872 */;
import _mod5891 from "module_5891" /* 5891 */;


export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod5891(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};