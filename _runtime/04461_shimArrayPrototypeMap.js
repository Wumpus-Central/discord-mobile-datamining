// _runtime/04461_shimArrayPrototypeMap.js
import { getPolyfill } from "04396_getPolyfill.js";
import { defineProperty } from "04415_defineProperty.js";

export default function shimArrayPrototypeMap() {
  const tmp = _getPolyfill();
  _require = tmp;
  _defineProperty(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};