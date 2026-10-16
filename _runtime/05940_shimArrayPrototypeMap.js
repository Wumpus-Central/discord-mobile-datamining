// === Module 5940: shimArrayPrototypeMap ===

// Module 5940 (shimArrayPrototypeMap)
import properlyBoxed from "properlyBoxed" /* 5875 */;
import _mod5894 from "module_5894" /* 5894 */;


export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod5894(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};