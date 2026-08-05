import { getPolyfill } from "04534_getPolyfill.js";
import { defineProperty } from "04553_defineProperty.js";
// _runtime/04599_shimArrayPrototypeMap.js

export default function shimArrayPrototypeMap() {
  const tmp = getPolyfill /* getPolyfill */();
  require = tmp;
  defineProperty /* defineProperty */(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};