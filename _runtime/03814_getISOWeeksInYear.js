// === Module 3814: getISOWeeksInYear ===

// Module 3814 (getISOWeeksInYear)
import startOfISOWeekYear from "startOfISOWeekYear" /* 3702 */;
import addWeeks from "addWeeks" /* 3709 */;
import requiredArgs from "requiredArgs" /* 3542 */;

if (!startOfISOWeekYear) {
  let obj = { default: null };
  obj[0] = startOfISOWeekYear;
  let tmp3 = obj;
} else {
  tmp3 = startOfISOWeekYear;
}
startOfISOWeekYear = tmp3;
if (!addWeeks) {
  obj = { default: null };
  obj[0] = addWeeks;
  let tmp5 = obj;
} else {
  tmp5 = addWeeks;
}
addWeeks = tmp5;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;
let c3 = 604800000;

export default function getISOWeeksInYear(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = startOfISOWeekYear.default(arg0);
  const defaultResult2 = startOfISOWeekYear.default(addWeeks.default(defaultResult1, 60));
  return Math.round((startOfISOWeekYear.default(addWeeks.default(defaultResult1, 60)).valueOf() - defaultResult1.valueOf()) / c3);
};
export default exports.default;