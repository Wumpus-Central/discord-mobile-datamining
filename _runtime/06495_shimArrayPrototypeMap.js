// === Module 6495: shimArrayPrototypeMap ===

// Module 6495 (shimArrayPrototypeMap)
import properlyBoxed from "properlyBoxed" /* 6430 */;
import _mod6449 from "module_6449" /* 6449 */;


export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod6449(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};