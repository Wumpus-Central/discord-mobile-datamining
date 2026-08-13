// _runtime/04601_ToNumber.js
import { isPrimitive } from "04602_isPrimitive.js";
let closure_2 = require("getEvalledConstructor")("%Number%");

export default function ToNumber(arg0) {
  let tmp3 = arg0;
  if (!isPrimitive(arg0)) {
    tmp3 = tmp(4603)(arg0, closure_2);
  }
  if (typeof tmp3 === "symbol") {
    const tmp12 = new tmp(541)("Cannot convert a Symbol value to a number");
    throw tmp12;
  } else if (typeof tmp3 === "bigint") {
    const tmp8 = new tmp(541)("Conversion from 'BigInt' to 'number' is not allowed.");
    throw tmp8;
  } else {
    if (typeof tmp3 === "string") {
      let tmp5 = tmp(4608)(tmp3);
    } else {
      tmp5 = +tmp3;
    }
    return tmp5;
  }
};