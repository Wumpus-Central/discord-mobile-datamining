// _runtime/04557_shimStringTrim.js
let closure_2 = require("hasPropertyDescriptors")();

export default function shimStringTrim() {
  const tmp3 = require("04550_getPolyfill.js") /* getPolyfill */();
  if (String.prototype.trim !== tmp3) {
    const tmpResult = require("01406_defineDataProperty.js") /* defineDataProperty */;
    const _String = String;
    if (closure_2) {
      tmpResult(prototype, "trim", tmp3, true);
    } else {
      tmpResult(prototype, "trim", tmp3);
    }
  }
  return tmp3;
};