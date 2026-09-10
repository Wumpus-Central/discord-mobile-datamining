// === Module 4924: shimArrayPrototypeMap ===

// Module 4924 (shimArrayPrototypeMap)
import properlyBoxed from "properlyBoxed" /* 4859 */;
import defineProperty from "defineProperty" /* 4878 */;


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