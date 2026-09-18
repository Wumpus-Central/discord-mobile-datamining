// === Module 5041: shimArrayPrototypeMap ===

// Module 5041 (shimArrayPrototypeMap)
import properlyBoxed from "properlyBoxed" /* 4976 */;
import _mod4995 from "module_4995" /* 4995 */;


export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod4995(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};