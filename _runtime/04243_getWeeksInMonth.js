// === Module 4243: getWeeksInMonth ===

// Module 4243 (getWeeksInMonth)
import differenceInCalendarWeeks_mod from "differenceInCalendarWeeks" /* 4147 */;
import lastDayOfMonth_mod from "lastDayOfMonth" /* 4244 */;
import startOfMonth_mod from "startOfMonth" /* 4174 */;
import requiredArgs_mod from "requiredArgs" /* 3959 */;

let tmp3;
let tmp5;
let tmp7;
let tmp9;
let differenceInCalendarWeeks = differenceInCalendarWeeks_mod;
if (!differenceInCalendarWeeks) {
  tmp3 = { default: differenceInCalendarWeeks };
  const obj = { default: differenceInCalendarWeeks };
} else {
  tmp3 = differenceInCalendarWeeks;
}
differenceInCalendarWeeks = tmp3;
let lastDayOfMonth = lastDayOfMonth_mod;
if (!lastDayOfMonth) {
  tmp5 = { default: lastDayOfMonth };
  const obj2 = { default: lastDayOfMonth };
} else {
  tmp5 = lastDayOfMonth;
}
lastDayOfMonth = tmp5;
let startOfMonth = startOfMonth_mod;
if (!startOfMonth) {
  tmp7 = { default: startOfMonth };
  const obj3 = { default: startOfMonth };
} else {
  tmp7 = startOfMonth;
}
startOfMonth = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp9 = { default: requiredArgs };
  const obj4 = { default: requiredArgs };
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function getWeeksInMonth(arg0, arg1) {
  requiredArgs.default(1, arguments);
  const _default = differenceInCalendarWeeks.default;
  const defaultResult1 = lastDayOfMonth.default(arg0);
  return _default(defaultResult1, startOfMonth.default(arg0), arg1) + 1;
};