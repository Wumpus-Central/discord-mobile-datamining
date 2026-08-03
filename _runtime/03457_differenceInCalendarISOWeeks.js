// === Module 3457: differenceInCalendarISOWeeks ===

// Module 3457 (differenceInCalendarISOWeeks)
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";
import startOfISOWeek from "startOfISOWeek";
import requiredArgs from "requiredArgs";

if (!getTimezoneOffsetInMilliseconds) {
  let obj = { default: null };
  obj[0] = getTimezoneOffsetInMilliseconds;
  let tmp3 = obj;
} else {
  tmp3 = getTimezoneOffsetInMilliseconds;
}
let c0 = tmp3;
if (!startOfISOWeek) {
  obj = { default: null };
  obj[0] = startOfISOWeek;
  let tmp5 = obj;
} else {
  tmp5 = startOfISOWeek;
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

export default function differenceInCalendarISOWeeks(arg0, arg1) {
  tmp7.default(2, arguments);
  const defaultResult1 = tmp5.default(arg0);
  const defaultResult2 = tmp5.default(arg1);
  const time = defaultResult1.getTime();
  const diff = time - tmp3.default(defaultResult1);
  const time1 = defaultResult2.getTime();
  return Math.round((diff - (time1 - tmp3.default(defaultResult2))) / c3);
};
export default exports.default;