// === Module 4821: ToNumber ===

// Module 4821 (ToNumber)
import _mod1282 from "module_1282" /* 1282 */;
import _mod4822 from "module_4822" /* 4822 */;

let closure_2 = _mod1282("%Number%");

export default function ToNumber(arg0) {
  let tmp3 = arg0;
  if (!_mod4822(arg0)) {
    tmp3 = tmp(4823)(arg0, closure_2);
  }
  if (typeof tmp3 === "symbol") {
    const tmp12 = new tmp(1283)("Cannot convert a Symbol value to a number");
    throw tmp12;
  } else if (typeof tmp3 === "bigint") {
    const tmp8 = new tmp(1283)("Conversion from 'BigInt' to 'number' is not allowed.");
    throw tmp8;
  } else {
    if (typeof tmp3 === "string") {
      let tmp5 = tmp(4828)(tmp3);
    } else {
      tmp5 = +tmp3;
    }
    return tmp5;
  }
};