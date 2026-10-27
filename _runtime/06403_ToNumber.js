// === Module 6403: ToNumber ===

// Module 6403 (ToNumber)
import _mod1304 from "module_1304" /* 1304 */;
import _mod1305 from "module_1305" /* 1305 */;
import _mod6404 from "module_6404" /* 6404 */;
import ToPrimitive from "ToPrimitive" /* 6405 */;
import StringToNumber from "StringToNumber" /* 6410 */;

let closure_2 = _mod1304("%Number%");

export default function ToNumber(arg0) {
  let tmp3 = arg0;
  if (!_mod6404(arg0)) {
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