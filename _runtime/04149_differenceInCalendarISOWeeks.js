// === Module 4149: differenceInCalendarISOWeeks ===

// Module 4149 (differenceInCalendarISOWeeks)
import getTimezoneOffsetInMilliseconds_mod from "getTimezoneOffsetInMilliseconds" /* 4127 */;
import startOfISOWeek_mod from "startOfISOWeek" /* 4122 */;
import requiredArgs_mod from "requiredArgs" /* 3965 */;

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
let startOfISOWeek = startOfISOWeek_mod;
if (!startOfISOWeek) {
  tmp5 = { default: startOfISOWeek };
  const obj2 = { default: startOfISOWeek };
} else {
  tmp5 = startOfISOWeek;
}
startOfISOWeek = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp7 = { default: requiredArgs };
  const obj3 = { default: requiredArgs };
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;
let c3 = 604800000;

export default function differenceInCalendarISOWeeks(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = startOfISOWeek.default(arg0);
  const defaultResult2 = startOfISOWeek.default(arg1);
  const time = defaultResult1.getTime();
  const diff = time - getTimezoneOffsetInMilliseconds.default(defaultResult1);
  const time1 = defaultResult2.getTime();
  return Math.round((diff - (time1 - getTimezoneOffsetInMilliseconds.default(defaultResult2))) / c3);
};