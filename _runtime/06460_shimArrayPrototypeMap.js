// === Module 6460: shimArrayPrototypeMap ===

// Module 6460 (shimArrayPrototypeMap)
import properlyBoxed from "properlyBoxed" /* 6395 */;
import _mod6414 from "module_6414" /* 6414 */;


export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod6414(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};