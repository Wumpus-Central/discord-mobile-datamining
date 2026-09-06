// === Module 4879: shimArrayPrototypeMap ===

// Module 4879 (shimArrayPrototypeMap)
import properlyBoxed from "properlyBoxed" /* 4814 */;
import defineProperty from "defineProperty" /* 4833 */;


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