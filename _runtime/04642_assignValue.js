// _runtime/04642_assignValue.js
import eq from "00616_eq.js";
import baseAssignValue from "00668_baseAssignValue.js";

export default function assignValue(arg0, View, arg2) {
  const call = hasOwnProperty.call;
  let tmp2 = typeof call === "unknown" ? hasOwnProperty(View) : call(arg0, View);
  if (tmp2) {
    tmp2 = eq(arg0[View], arg2);
  }
  if (tmp2) {
    tmp2 = undefined !== arg2 || View in arg0;
    const tmp5 = undefined !== arg2 || View in arg0;
  }
  if (!tmp2) {
    baseAssignValue(arg0, View, arg2);
  }
}
