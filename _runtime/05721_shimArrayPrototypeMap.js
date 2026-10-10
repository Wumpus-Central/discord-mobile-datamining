// === Module 5721: shimArrayPrototypeMap ===

// Module 5721 (shimArrayPrototypeMap)
import properlyBoxed from "properlyBoxed" /* 5656 */;
import _mod5675 from "module_5675" /* 5675 */;


export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod5675(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};