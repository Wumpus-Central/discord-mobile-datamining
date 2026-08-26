// === Module 3825: getWeeksInMonth ===

// Module 3825 (getWeeksInMonth)
import differenceInCalendarWeeks from "differenceInCalendarWeeks" /* 3729 */;
import lastDayOfMonth from "lastDayOfMonth" /* 3826 */;
import startOfMonth from "startOfMonth" /* 3756 */;
import requiredArgs from "requiredArgs" /* 3541 */;

if (!differenceInCalendarWeeks) {
  let obj = { default: null };
  obj[0] = differenceInCalendarWeeks;
  let tmp3 = obj;
} else {
  tmp3 = differenceInCalendarWeeks;
}
differenceInCalendarWeeks = tmp3;
if (!lastDayOfMonth) {
  obj = { default: null };
  obj[0] = lastDayOfMonth;
  let tmp5 = obj;
} else {
  tmp5 = lastDayOfMonth;
}
lastDayOfMonth = tmp5;
if (!startOfMonth) {
  obj = { default: null };
  obj[0] = startOfMonth;
  let tmp7 = obj;
} else {
  tmp7 = startOfMonth;
}
startOfMonth = tmp7;
if (!requiredArgs) {
  const obj1 = { default: null };
  obj1[0] = requiredArgs;
  let tmp9 = obj1;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function getWeeksInMonth(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return differenceInCalendarWeeks.default(lastDayOfMonth.default(arg0), startOfMonth.default(arg0), arg1) + 1;
};
export default exports.default;