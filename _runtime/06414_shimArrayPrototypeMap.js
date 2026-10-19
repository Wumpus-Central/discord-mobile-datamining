// === Module 6414: shimArrayPrototypeMap ===

// Module 6414 (shimArrayPrototypeMap)
import properlyBoxed from "properlyBoxed" /* 6349 */;
import _mod6368 from "module_6368" /* 6368 */;


export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod6368(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};