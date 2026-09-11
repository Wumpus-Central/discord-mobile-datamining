// === Module 4867: ToNumber ===

// Module 4867 (ToNumber)
import _mod1282 from "module_1282" /* 1282 */;
import _mod1283 from "module_1283" /* 1283 */;
import _mod4868 from "module_4868" /* 4868 */;
import ToPrimitive from "ToPrimitive" /* 4869 */;
import StringToNumber from "StringToNumber" /* 4874 */;

let closure_2 = _mod1282("%Number%");

export default function ToNumber(arg0) {
  let tmp3 = arg0;
  if (!_mod4868(arg0)) {
    tmp3 = ToPrimitive(arg0, closure_2);
  }
  if (typeof tmp3 === "symbol") {
    const tmp12 = new _mod1283("Cannot convert a Symbol value to a number");
    throw tmp12;
  } else if (typeof tmp3 === "bigint") {
    const tmp8 = new _mod1283("Conversion from 'BigInt' to 'number' is not allowed.");
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