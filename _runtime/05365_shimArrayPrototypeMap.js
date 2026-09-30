// === Module 5365: shimArrayPrototypeMap ===

// Module 5365 (shimArrayPrototypeMap)
import properlyBoxed from "properlyBoxed" /* 5300 */;
import _mod5319 from "module_5319" /* 5319 */;


export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod5319(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};