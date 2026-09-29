// === Module 5335: shimArrayPrototypeMap ===

// Module 5335 (shimArrayPrototypeMap)
import properlyBoxed from "properlyBoxed" /* 5270 */;
import _mod5289 from "module_5289" /* 5289 */;


export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod5289(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};