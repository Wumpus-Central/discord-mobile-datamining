// === Module 6439: shimArrayPrototypeMap ===

// Module 6439 (shimArrayPrototypeMap)
import properlyBoxed from "properlyBoxed" /* 6374 */;
import _mod6393 from "module_6393" /* 6393 */;


export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod6393(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};