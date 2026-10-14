// === Module 5726: shimArrayPrototypeMap ===

// Module 5726 (shimArrayPrototypeMap)
import properlyBoxed from "properlyBoxed" /* 5661 */;
import _mod5680 from "module_5680" /* 5680 */;


export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod5680(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};