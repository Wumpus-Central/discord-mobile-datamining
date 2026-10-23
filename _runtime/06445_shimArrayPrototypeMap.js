// === Module 6445: shimArrayPrototypeMap ===

// Module 6445 (shimArrayPrototypeMap)
import properlyBoxed from "properlyBoxed" /* 6380 */;
import _mod6399 from "module_6399" /* 6399 */;


export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod6399(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};