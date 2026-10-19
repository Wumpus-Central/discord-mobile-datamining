// === Module 6356: ToNumber ===

// Module 6356 (ToNumber)
import _mod1307 from "module_1307" /* 1307 */;
import _mod1308 from "module_1308" /* 1308 */;
import _mod6357 from "module_6357" /* 6357 */;
import ToPrimitive from "ToPrimitive" /* 6358 */;
import StringToNumber from "StringToNumber" /* 6363 */;

let closure_2 = _mod1307("%Number%");

export default function ToNumber(arg0) {
  let tmp3 = arg0;
  if (!_mod6357(arg0)) {
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