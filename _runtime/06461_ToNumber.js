// === Module 6461: ToNumber ===

// Module 6461 (ToNumber)
import _mod1304 from "module_1304" /* 1304 */;
import _mod1305 from "module_1305" /* 1305 */;
import _mod6462 from "module_6462" /* 6462 */;
import ToPrimitive from "ToPrimitive" /* 6463 */;
import StringToNumber from "StringToNumber" /* 6468 */;

let closure_2 = _mod1304("%Number%");

export default function ToNumber(arg0) {
  let tmp3 = arg0;
  if (!_mod6462(arg0)) {
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