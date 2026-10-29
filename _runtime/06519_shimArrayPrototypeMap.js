// === Module 6519: shimArrayPrototypeMap ===

// Module 6519 (shimArrayPrototypeMap)
import properlyBoxed from "properlyBoxed" /* 6454 */;
import _mod6473 from "module_6473" /* 6473 */;


export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod6473(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};