// _runtime/03569_differenceInCalendarWeeks.js
import startOfWeek from "startOfWeek";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";
import requiredArgs from "requiredArgs";

if (!startOfWeek) {
  let obj = { default: null };
  obj[0] = startOfWeek;
  let tmp3 = obj;
} else {
  tmp3 = startOfWeek;
}
let c0 = tmp3;
if (!getTimezoneOffsetInMilliseconds) {
  obj = { default: null };
  obj[0] = getTimezoneOffsetInMilliseconds;
  let tmp5 = obj;
} else {
  tmp5 = getTimezoneOffsetInMilliseconds;
}
let closure_1 = tmp5;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
let c3 = 604800000;

export default function differenceInCalendarWeeks(arg0, arg1, arg2) {
  tmp7.default(2, arguments);
  const defaultResult1 = tmp3.default(arg0, arg2);
  const defaultResult2 = tmp3.default(arg1, arg2);
  const time = defaultResult1.getTime();
  const diff = time - tmp5.default(defaultResult1);
  const time1 = defaultResult2.getTime();
  return Math.round((diff - (time1 - tmp5.default(defaultResult2))) / c3);
};
export default exports.default;