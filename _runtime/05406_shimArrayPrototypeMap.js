// _runtime/05406_shimArrayPrototypeMap.js
import getPolyfill from "05341_getPolyfill.js";
import defineProperties from "05360_defineProperties.js";

export default function shimArrayPrototypeMap() {
  const tmp = getPolyfill();
  let closure_0 = tmp;
  const obj = {
    map() {
      return Array.prototype.map !== closure_0;
    },
  };
  defineProperties(Array.prototype, { map: tmp }, obj);
  return tmp;
}
