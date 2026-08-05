import { isNaN } from "00572_isNaN.js";
// _runtime/04585_SameValue.js

export default function SameValue(arg0, arg1) {
  if (arg0 === arg1) {
    let tmp4 = 0 !== arg0;
    if (!tmp4) {
      tmp4 = 1 / arg0 === 1 / arg1;
    }
    let tmp3 = tmp4;
  } else {
    tmp3 = isNaN /* isNaN */(arg0) && isNaN /* isNaN */(arg1);
    const tmp = require;
  }
  return tmp3;
};