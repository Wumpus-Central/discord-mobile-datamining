// _runtime/metro/03935__.js
import differenceInCalendarWeeks from "../03839_differenceInCalendarWeeks.js";
import lastDayOfMonth from "../03936_lastDayOfMonth.js";
import startOfMonth from "../03866_startOfMonth.js";
import requiredArgs from "../03651_requiredArgs.js";

if (!differenceInCalendarWeeks) {
  let obj = { default: differenceInCalendarWeeks };
  let tmp3 = obj;
} else {
  tmp3 = differenceInCalendarWeeks;
}
differenceInCalendarWeeks = tmp3;
if (!lastDayOfMonth) {
  obj = { default: lastDayOfMonth };
  let tmp5 = obj;
} else {
  tmp5 = lastDayOfMonth;
}
lastDayOfMonth = tmp5;
if (!startOfMonth) {
  obj = { default: startOfMonth };
  let tmp7 = obj;
} else {
  tmp7 = startOfMonth;
}
startOfMonth = tmp7;
if (!requiredArgs) {
  const obj1 = { default: requiredArgs };
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