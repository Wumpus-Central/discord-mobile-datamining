// _runtime/04681_shimArrayPrototypeMap.js
import { getPolyfill } from "04616_getPolyfill.js";
import { defineProperty } from "04635_defineProperty.js";

export default function shimArrayPrototypeMap() {
  const tmp = getPolyfill();
  require = tmp;
  defineProperty(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};