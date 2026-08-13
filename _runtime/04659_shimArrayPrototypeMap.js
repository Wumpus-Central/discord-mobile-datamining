// _runtime/04659_shimArrayPrototypeMap.js
import { getPolyfill } from "04594_getPolyfill.js";
import { defineProperty } from "04613_defineProperty.js";

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