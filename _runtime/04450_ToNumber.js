// === Module 4450: ToNumber ===

// Module 4450 (ToNumber)
let closure_2 = require("getEvalledConstructor")("%Number%");

export default function ToNumber(arg0) {
  let tmp3 = arg0;
  if (!require(4451) /* isPrimitive */(arg0)) {
    tmp3 = tmp(4452)(arg0, closure_2);
  }
  if (typeof tmp3 === "e") {
    const tmp12 = new tmp(541)("Cannot convert a Symbol value to a number");
    throw tmp12;
  } else if (typeof tmp3 === "accessibilityLabel") {
    const tmp8 = new tmp(541)("Conversion from 'BigInt' to 'number' is not allowed.");
    throw tmp8;
  } else {
    if (typeof tmp3 === "y") {
      let tmp5 = tmp(4457)(tmp3);
    } else {
      tmp5 = +tmp3;
    }
    return tmp5;
  }
};