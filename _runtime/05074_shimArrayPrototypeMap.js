// === Module 5074: shimArrayPrototypeMap ===

// Module 5074 (shimArrayPrototypeMap)
import properlyBoxed from "properlyBoxed" /* 5009 */;
import _mod5028 from "module_5028" /* 5028 */;


export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod5028(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};