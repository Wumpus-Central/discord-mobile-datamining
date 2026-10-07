// === Module 5406: shimArrayPrototypeMap ===

// Module 5406 (shimArrayPrototypeMap)
import properlyBoxed from "properlyBoxed" /* 5341 */;
import _mod5360 from "module_5360" /* 5360 */;


export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod5360(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};