// _runtime/04818_SameValue.js
import isNaN from "00569_isNaN.js";

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
}
