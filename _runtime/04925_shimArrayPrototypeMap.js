// === Module 4925: shimArrayPrototypeMap ===

// Module 4925 (shimArrayPrototypeMap)
import properlyBoxed from "properlyBoxed" /* 4860 */;
import defineProperty from "defineProperty" /* 4879 */;


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