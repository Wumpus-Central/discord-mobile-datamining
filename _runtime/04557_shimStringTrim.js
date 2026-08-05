// _runtime/04557_shimStringTrim.js
import { defineDataProperty } from "01406_defineDataProperty.js";
import { getPolyfill } from "04550_getPolyfill.js";
let closure_2 = require("hasPropertyDescriptors")();

export default function shimStringTrim() {
  const tmp3 = getPolyfill /* getPolyfill */();
  if (String.prototype.trim !== tmp3) {
    const tmpResult = defineDataProperty /* defineDataProperty */;
    const _String = String;
    if (closure_2) {
      tmpResult(prototype, "trim", tmp3, true);
    } else {
      tmpResult(prototype, "trim", tmp3);
    }
  }
  return tmp3;
};