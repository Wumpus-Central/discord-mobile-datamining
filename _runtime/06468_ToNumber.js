// === Module 6468: ToNumber ===

// Module 6468 (ToNumber)
import _mod1293 from "module_1293" /* 1293 */;
import _mod1294 from "module_1294" /* 1294 */;
import _mod6469 from "module_6469" /* 6469 */;
import ToPrimitive from "ToPrimitive" /* 6470 */;
import StringToNumber from "StringToNumber" /* 6475 */;

let closure_2 = _mod1293("%Number%");

export default function ToNumber(arg0) {
  let tmp3 = arg0;
  if (!_mod6469(arg0)) {
    tmp3 = ToPrimitive(arg0, closure_2);
  }
  if (typeof tmp3 === "symbol") {
    const tmp12 = new _mod1294("Cannot convert a Symbol value to a number");
    throw tmp12;
  } else if (typeof tmp3 === "bigint") {
    const tmp8 = new _mod1294("Conversion from 'BigInt' to 'number' is not allowed.");
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