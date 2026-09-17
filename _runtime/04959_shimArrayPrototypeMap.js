// === Module 4959: shimArrayPrototypeMap ===

// Module 4959 (shimArrayPrototypeMap)
import properlyBoxed from "properlyBoxed" /* 4894 */;
import defineProperty from "defineProperty" /* 4913 */;


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