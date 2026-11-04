// === Module 6667: shimArrayPrototypeMap ===

// Module 6667 (shimArrayPrototypeMap)
import properlyBoxed from "properlyBoxed" /* 6602 */;
import _mod6621 from "module_6621" /* 6621 */;


export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod6621(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};