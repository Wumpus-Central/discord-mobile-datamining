// === Module 5718: shimArrayPrototypeMap ===

// Module 5718 (shimArrayPrototypeMap)
import properlyBoxed from "properlyBoxed" /* 5653 */;
import _mod5672 from "module_5672" /* 5672 */;


export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod5672(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};