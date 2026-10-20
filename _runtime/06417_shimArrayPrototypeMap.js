// === Module 6417: shimArrayPrototypeMap ===

// Module 6417 (shimArrayPrototypeMap)
import properlyBoxed from "properlyBoxed" /* 6352 */;
import _mod6371 from "module_6371" /* 6371 */;


export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod6371(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};