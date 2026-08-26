// === Module 3724: differenceInCalendarISOWeekYears ===

// Module 3724 (differenceInCalendarISOWeekYears)
import getISOWeekYear from "getISOWeekYear" /* 3697 */;
import requiredArgs from "requiredArgs" /* 3541 */;

if (!getISOWeekYear) {
  let obj = { default: null };
  obj[0] = getISOWeekYear;
  let tmp3 = obj;
} else {
  tmp3 = getISOWeekYear;
}
getISOWeekYear = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function differenceInCalendarISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return getISOWeekYear.default(arg0) - getISOWeekYear.default(arg1);
};
export default exports.default;