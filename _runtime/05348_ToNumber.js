// === Module 5348: ToNumber ===

// Module 5348 (ToNumber)
import GetIntrinsic from "GetIntrinsic" /* 1292 */;
import _mod1293 from "module_1293" /* 1293 */;
import isPrimitive from "isPrimitive" /* 5349 */;
import ToPrimitive from "ToPrimitive" /* 5350 */;
import StringToNumber from "StringToNumber" /* 5355 */;

let closure_2 = GetIntrinsic("%Number%");

export default function ToNumber(arg0) {
  let tmp3 = arg0;
  if (!isPrimitive(arg0)) {
    tmp3 = ToPrimitive(arg0, closure_2);
  }
  if (typeof tmp3 === "symbol") {
    const self3 = this;
    const self4 = this;
    const tmp8 = new _mod1293("Cannot convert a Symbol value to a number");
    throw tmp8;
  } else if (typeof tmp3 === "bigint") {
    const self = this;
    const self2 = this;
    const tmp6 = new _mod1293("Conversion from 'BigInt' to 'number' is not allowed.");
    throw tmp6;
  } else {
    let tmp5;
    if (typeof tmp3 === "string") {
      tmp5 = StringToNumber(tmp3);
    } else {
      tmp5 = +tmp3;
    }
    return tmp5;
  }
};