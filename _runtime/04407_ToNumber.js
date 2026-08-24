// === Module 4407: ToNumber ===

// Module 4407 (ToNumber)
import getEvalledConstructor from "getEvalledConstructor" /* 540 */;
import isPrimitive from "isPrimitive" /* 4408 */;

let closure_2 = getEvalledConstructor("%Number%");

export default function ToNumber(arg0) {
  let tmp3 = arg0;
  if (!isPrimitive(arg0)) {
    tmp3 = tmp(4409)(arg0, closure_2);
  }
  if (typeof tmp3 === "symbol") {
    const tmp12 = new tmp(541)("Cannot convert a Symbol value to a number");
    throw tmp12;
  } else if (typeof tmp3 === "bigint") {
    const tmp8 = new tmp(541)("Conversion from 'BigInt' to 'number' is not allowed.");
    throw tmp8;
  } else {
    if (typeof tmp3 === "string") {
      let tmp5 = tmp(4414)(tmp3);
    } else {
      tmp5 = +tmp3;
    }
    return tmp5;
  }
};