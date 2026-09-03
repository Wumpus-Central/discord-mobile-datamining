// _runtime/04775_ToNumber.js
import getEvalledConstructor from "00537_getEvalledConstructor.js";
import isPrimitive from "04776_isPrimitive.js";

let closure_2 = getEvalledConstructor("%Number%");

export default function ToNumber(arg0) {
  let tmp3 = arg0;
  if (!isPrimitive(arg0)) {
    tmp3 = tmp(4777)(arg0, closure_2);
  }
  if (typeof tmp3 === "symbol") {
    const tmp12 = new tmp(538)("Cannot convert a Symbol value to a number");
    throw tmp12;
  } else if (typeof tmp3 === "bigint") {
    const tmp8 = new tmp(538)("Conversion from 'BigInt' to 'number' is not allowed.");
    throw tmp8;
  } else {
    if (typeof tmp3 === "string") {
      let tmp5 = tmp(4782)(tmp3);
    } else {
      tmp5 = +tmp3;
    }
    return tmp5;
  }
}
