// _runtime/04832_shimArrayPrototypeMap.js
import { getPolyfill } from "04767_getPolyfill.js";
import { defineProperty } from "04786_defineProperty.js";

export default function shimArrayPrototypeMap() {
  const tmp = getPolyfill();
  _require = tmp;
  defineProperty(
    Array.prototype,
    { map: tmp },
    {
      map() {
        return Array.prototype.map !== closure_0;
      },
    },
  );
  return tmp;
}
