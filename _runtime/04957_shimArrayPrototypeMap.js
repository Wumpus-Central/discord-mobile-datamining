// === Module 4957: shimArrayPrototypeMap ===

// Module 4957 (shimArrayPrototypeMap)
import properlyBoxed from "properlyBoxed" /* 4892 */;
import defineProperty from "defineProperty" /* 4911 */;


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