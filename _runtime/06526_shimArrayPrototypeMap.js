// === Module 6526: shimArrayPrototypeMap ===

// Module 6526 (shimArrayPrototypeMap)
import properlyBoxed from "properlyBoxed" /* 6461 */;
import _mod6480 from "module_6480" /* 6480 */;


export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod6480(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};