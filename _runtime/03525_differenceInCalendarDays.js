// _runtime/03525_differenceInCalendarDays.js
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";
import startOfDay from "startOfDay";
import requiredArgs from "requiredArgs";

if (!getTimezoneOffsetInMilliseconds) {
  let obj = { default: null };
  obj[0] = getTimezoneOffsetInMilliseconds;
  let tmp3 = obj;
} else {
  tmp3 = getTimezoneOffsetInMilliseconds;
}
let c0 = tmp3;
if (!startOfDay) {
  obj = { default: null };
  obj[0] = startOfDay;
  let tmp5 = obj;
} else {
  tmp5 = startOfDay;
}
let closure_1 = tmp5;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
let c3 = 86400000;

export default function differenceInCalendarDays(arg0, arg1) {
  tmp7.default(2, arguments);
  const defaultResult1 = tmp5.default(arg0);
  const defaultResult2 = tmp5.default(arg1);
  const time = defaultResult1.getTime();
  const diff = time - tmp3.default(defaultResult1);
  const time1 = defaultResult2.getTime();
  return Math.round((diff - (time1 - tmp3.default(defaultResult2))) / c3);
};
export default exports.default;