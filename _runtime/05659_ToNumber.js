// === Module 5659: ToNumber ===

// Module 5659 (ToNumber)
import _mod1304 from "module_1304" /* 1304 */;
import _mod1305 from "module_1305" /* 1305 */;
import _mod5660 from "module_5660" /* 5660 */;
import ToPrimitive from "ToPrimitive" /* 5661 */;
import StringToNumber from "StringToNumber" /* 5666 */;

let closure_2 = _mod1304("%Number%");

export default function ToNumber(arg0) {
  let tmp3 = arg0;
  if (!_mod5660(arg0)) {
    tmp3 = ToPrimitive(arg0, closure_2);
  }
  if (typeof tmp3 === "symbol") {
    const tmp12 = new _mod1305("Cannot convert a Symbol value to a number");
    throw tmp12;
  } else if (typeof tmp3 === "bigint") {
    const tmp8 = new _mod1305("Conversion from 'BigInt' to 'number' is not allowed.");
    throw tmp8;
  } else {
    if (typeof tmp3 === "string") {
      let tmp5 = StringToNumber(tmp3);
    } else {
      tmp5 = +tmp3;
    }
    return tmp5;
  }
};