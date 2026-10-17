// === Module 5977: shimArrayPrototypeMap ===

// Module 5977 (shimArrayPrototypeMap)
import properlyBoxed from "properlyBoxed" /* 5912 */;
import _mod5931 from "module_5931" /* 5931 */;


export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod5931(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};