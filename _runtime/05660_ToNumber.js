// === Module 5660: ToNumber ===

// Module 5660 (ToNumber)
import _mod1305 from "module_1305" /* 1305 */;
import _mod1306 from "module_1306" /* 1306 */;
import _mod5661 from "module_5661" /* 5661 */;
import ToPrimitive from "ToPrimitive" /* 5662 */;
import StringToNumber from "StringToNumber" /* 5667 */;

let closure_2 = _mod1305("%Number%");

export default function ToNumber(arg0) {
  let tmp3 = arg0;
  if (!_mod5661(arg0)) {
    tmp3 = ToPrimitive(arg0, closure_2);
  }
  if (typeof tmp3 === "symbol") {
    const tmp12 = new _mod1306("Cannot convert a Symbol value to a number");
    throw tmp12;
  } else if (typeof tmp3 === "bigint") {
    const tmp8 = new _mod1306("Conversion from 'BigInt' to 'number' is not allowed.");
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