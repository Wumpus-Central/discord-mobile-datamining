// _runtime/metro/04011__.js
import differenceInCalendarWeeks_mod from "../03915_differenceInCalendarWeeks.js";
import lastDayOfMonth_mod from "../04012_lastDayOfMonth.js";
import startOfMonth_mod from "../03942_startOfMonth.js";
import requiredArgs_mod from "../03727_requiredArgs.js";

let differenceInCalendarWeeks = differenceInCalendarWeeks_mod;
if (!differenceInCalendarWeeks) {
  const obj = { default: differenceInCalendarWeeks };
  let tmp3 = obj;
} else {
  tmp3 = differenceInCalendarWeeks;
}
differenceInCalendarWeeks = tmp3;
let lastDayOfMonth = lastDayOfMonth_mod;
if (!lastDayOfMonth) {
  const obj2 = { default: lastDayOfMonth };
  let tmp5 = obj2;
} else {
  tmp5 = lastDayOfMonth;
}
lastDayOfMonth = tmp5;
let startOfMonth = startOfMonth_mod;
if (!startOfMonth) {
  const obj3 = { default: startOfMonth };
  let tmp7 = obj3;
} else {
  tmp7 = startOfMonth;
}
startOfMonth = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function getWeeksInMonth(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return differenceInCalendarWeeks.default(lastDayOfMonth.default(arg0), startOfMonth.default(arg0), arg1) + 1;
};
export default exports.default;