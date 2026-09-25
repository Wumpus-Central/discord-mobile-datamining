// === Module 5162: shimArrayPrototypeMap ===

// Module 5162 (shimArrayPrototypeMap)
import properlyBoxed from "properlyBoxed" /* 5097 */;
import _mod5116 from "module_5116" /* 5116 */;


export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod5116(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};