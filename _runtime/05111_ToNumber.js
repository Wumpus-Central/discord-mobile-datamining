// === Module 5111: ToNumber ===

// Module 5111 (ToNumber)
import _mod1281 from "module_1281" /* 1281 */;
import _mod1282 from "module_1282" /* 1282 */;
import _mod5112 from "module_5112" /* 5112 */;
import ToPrimitive from "ToPrimitive" /* 5113 */;
import StringToNumber from "StringToNumber" /* 5118 */;

let closure_2 = _mod1281("%Number%");

export default function ToNumber(arg0) {
  let tmp3 = arg0;
  if (!_mod5112(arg0)) {
    tmp3 = ToPrimitive(arg0, closure_2);
  }
  if (typeof tmp3 === "symbol") {
    const tmp12 = new _mod1282("Cannot convert a Symbol value to a number");
    throw tmp12;
  } else if (typeof tmp3 === "bigint") {
    const tmp8 = new _mod1282("Conversion from 'BigInt' to 'number' is not allowed.");
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