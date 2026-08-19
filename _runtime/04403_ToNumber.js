// === Module 4403: ToNumber ===

// Module 4403 (ToNumber)
import getEvalledConstructor from "getEvalledConstructor" /* 540 */;
import _mod541 from "module_541" /* 541 */;
import isPrimitive from "isPrimitive" /* 4404 */;
import ToPrimitive from "ToPrimitive" /* 4405 */;
import StringToNumber from "StringToNumber" /* 4410 */;

let closure_2 = getEvalledConstructor("%Number%");

export default function ToNumber(arg0) {
  let tmp3 = arg0;
  if (!isPrimitive(arg0)) {
    tmp3 = ToPrimitive(arg0, closure_2);
  }
  if (typeof tmp3 === "symbol") {
    const tmp12 = new _mod541("Cannot convert a Symbol value to a number");
    throw tmp12;
  } else if (typeof tmp3 === "bigint") {
    const tmp8 = new _mod541("Conversion from 'BigInt' to 'number' is not allowed.");
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