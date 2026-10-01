// === Module 5353: shimArrayPrototypeMap ===

// Module 5353 (shimArrayPrototypeMap)
import properlyBoxed from "properlyBoxed" /* 5288 */;
import _mod5307 from "module_5307" /* 5307 */;


export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  _mod5307(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};