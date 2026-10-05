// === Module 5399: shimArrayPrototypeMap ===

// Module 5399 (shimArrayPrototypeMap)
import getPolyfill from "getPolyfill" /* 5334 */;
import defineProperties from "defineProperties" /* 5353 */;


export default function shimArrayPrototypeMap() {
  const tmp = getPolyfill();
  let closure_0 = tmp;
  const obj = {
    map() {
      return Array.prototype.map !== closure_0;
    }
  };
  defineProperties(Array.prototype, { map: tmp }, obj);
  return tmp;
};