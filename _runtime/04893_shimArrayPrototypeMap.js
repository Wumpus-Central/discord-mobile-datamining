// === Module 4893: shimArrayPrototypeMap ===

// Module 4893 (shimArrayPrototypeMap)
import properlyBoxed from "properlyBoxed" /* 4828 */;
import defineProperty from "defineProperty" /* 4847 */;


export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  defineProperty(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};