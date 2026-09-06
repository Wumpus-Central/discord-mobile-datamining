// === Module 3875: endOfISOWeekYear ===

// Module 3875 (endOfISOWeekYear)
import getISOWeekYear from "getISOWeekYear" /* 3807 */;
import startOfISOWeek from "startOfISOWeek" /* 3808 */;
import requiredArgs from "requiredArgs" /* 3651 */;

if (!getISOWeekYear) {
  let obj = { default: null };
  obj[0] = getISOWeekYear;
  let tmp3 = obj;
} else {
  tmp3 = getISOWeekYear;
}
getISOWeekYear = tmp3;
if (!startOfISOWeek) {
  obj = { default: null };
  obj[0] = startOfISOWeek;
  let tmp5 = obj;
} else {
  tmp5 = startOfISOWeek;
}
startOfISOWeek = tmp5;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function endOfISOWeekYear(arg0) {
  requiredArgs.default(1, arguments);
  const date = new Date(0);
  date.setFullYear(getISOWeekYear.default(arg0) + 1, 0, 4);
  date.setHours(0, 0, 0, 0);
  const defaultResult2 = startOfISOWeek.default(date);
  defaultResult2.setMilliseconds(defaultResult2.getMilliseconds() - 1);
  return defaultResult2;
};
export default exports.default;