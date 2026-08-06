// _runtime/04407_assignValue.js
import { eq } from "00752_eq.js";
import { baseAssignValue } from "00804_baseAssignValue.js";

export default function assignValue(arg0, arg1, arg2) {
  const call = hasOwnProperty.call;
  let tmp2 = typeof call === "unknown" ? hasOwnProperty(arg1) : call(arg0, arg1);
  if (tmp2) {
    tmp2 = eq(arg0[arg1], arg2);
  }
  if (tmp2) {
    tmp2 = undefined !== arg2 || arg1 in arg0;
    const tmp5 = undefined !== arg2 || arg1 in arg0;
  }
  if (!tmp2) {
    baseAssignValue(arg0, arg1, arg2);
  }
};