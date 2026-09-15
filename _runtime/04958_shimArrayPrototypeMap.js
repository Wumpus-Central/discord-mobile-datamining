// === Module 4958: shimArrayPrototypeMap ===

// Module 4958 (shimArrayPrototypeMap)
import properlyBoxed from "properlyBoxed" /* 4893 */;
import defineProperty from "defineProperty" /* 4912 */;


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