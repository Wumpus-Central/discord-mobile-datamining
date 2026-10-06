// === Module 4979: assignValue ===

// Module 4979 (assignValue)
import eq from "eq" /* 627 */;
import baseAssignValue from "baseAssignValue" /* 679 */;


export default function assignValue(arg0, arg1, arg2) {
  const tmp = arg0[arg1];
  let callResult = hasOwnProperty.call(arg0, arg1) && eq(tmp, arg2);
  if (callResult) {
    callResult = undefined !== arg2 || arg1 in arg0;
  }
  if (!callResult) {
    baseAssignValue(arg0, arg1, arg2);
  }
};