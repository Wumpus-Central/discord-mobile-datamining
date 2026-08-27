// === Module 4771: SameValue ===

// Module 4771 (SameValue)
import isNaN from "isNaN" /* 572 */;


export default function SameValue(arg0, arg1) {
  if (arg0 === arg1) {
    let tmp4 = 0 !== arg0;
    if (!tmp4) {
      tmp4 = 1 / arg0 === 1 / arg1;
    }
    let tmp3 = tmp4;
  } else {
    tmp3 = isNaN(arg0) && isNaN(arg1);
    const tmp = require;
  }
  return tmp3;
};