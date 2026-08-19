// === Module 4595: assignValue ===

// Module 4595 (assignValue)
import eq from "eq" /* 752 */;
import baseAssignValue from "baseAssignValue" /* 804 */;


export default function assignValue(arg0, key10009) {
  const call = hasOwnProperty.call;
  let tmp2 = typeof call === "unknown" ? hasOwnProperty(key10009) : call(arg0, key10009);
  if (tmp2) {
    tmp2 = eq(arg0[key10009], arg2);
  }
  if (tmp2) {
    tmp2 = undefined !== arg2 || key10009 in arg0;
  }
  if (!tmp2) {
    baseAssignValue(arg0, key10009, arg2);
  }
};