// === Module 5939: shimArrayPrototypeMap ===

// Module 5939 (shimArrayPrototypeMap)
import properlyBoxed from "properlyBoxed" /* 5874 */;
import _mod5893 from "module_5893" /* 5893 */;


export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod5893(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};