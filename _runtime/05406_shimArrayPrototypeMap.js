// === Module 5406: shimArrayPrototypeMap ===

// Module 5406 (shimArrayPrototypeMap)
import getPolyfill from "getPolyfill" /* 5341 */;
import defineProperties from "defineProperties" /* 5360 */;


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