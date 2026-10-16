// === Module 5882: ToNumber ===

// Module 5882 (ToNumber)
import _mod1307 from "module_1307" /* 1307 */;
import _mod1308 from "module_1308" /* 1308 */;
import _mod5883 from "module_5883" /* 5883 */;
import ToPrimitive from "ToPrimitive" /* 5884 */;
import StringToNumber from "StringToNumber" /* 5889 */;

let closure_2 = _mod1307("%Number%");

export default function ToNumber(arg0) {
  let tmp3 = arg0;
  if (!_mod5883(arg0)) {
    tmp3 = ToPrimitive(arg0, closure_2);
  }
  if (typeof tmp3 === "symbol") {
    const tmp12 = new _mod1308("Cannot convert a Symbol value to a number");
    throw tmp12;
  } else if (typeof tmp3 === "bigint") {
    const tmp8 = new _mod1308("Conversion from 'BigInt' to 'number' is not allowed.");
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