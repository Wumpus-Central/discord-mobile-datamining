// === Module 4120: differenceInCalendarDays ===

// Module 4120 (differenceInCalendarDays)
import getTimezoneOffsetInMilliseconds_mod from "getTimezoneOffsetInMilliseconds" /* 4121 */;
import startOfDay_mod from "startOfDay" /* 4122 */;
import requiredArgs_mod from "requiredArgs" /* 3959 */;

let tmp3;
let tmp5;
let tmp7;
let getTimezoneOffsetInMilliseconds = getTimezoneOffsetInMilliseconds_mod;
if (!getTimezoneOffsetInMilliseconds) {
  tmp3 = { default: getTimezoneOffsetInMilliseconds };
  const obj = { default: getTimezoneOffsetInMilliseconds };
} else {
  tmp3 = getTimezoneOffsetInMilliseconds;
}
getTimezoneOffsetInMilliseconds = tmp3;
let startOfDay = startOfDay_mod;
if (!startOfDay) {
  tmp5 = { default: startOfDay };
  const obj2 = { default: startOfDay };
} else {
  tmp5 = startOfDay;
}
startOfDay = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp7 = { default: requiredArgs };
  const obj3 = { default: requiredArgs };
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;
let c3 = 86400000;

export default function differenceInCalendarDays(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = startOfDay.default(arg0);
  const defaultResult2 = startOfDay.default(arg1);
  const time = defaultResult1.getTime();
  const diff = time - getTimezoneOffsetInMilliseconds.default(defaultResult1);
  const time1 = defaultResult2.getTime();
  return Math.round((diff - (time1 - getTimezoneOffsetInMilliseconds.default(defaultResult2))) / c3);
};