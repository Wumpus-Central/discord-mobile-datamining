// _runtime/04720_shimArrayPrototypeMap.js
import { getPolyfill } from "04655_getPolyfill.js";
import { defineProperty } from "04674_defineProperty.js";

export default function shimArrayPrototypeMap() {
  const tmp = getPolyfill();
  _require = tmp;
  defineProperty(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};