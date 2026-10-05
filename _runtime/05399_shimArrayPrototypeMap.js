// _runtime/05399_shimArrayPrototypeMap.js
import getPolyfill from "05334_getPolyfill.js";
import defineProperties from "05353_defineProperties.js";

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
