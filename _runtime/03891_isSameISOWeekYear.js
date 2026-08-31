// === Module 3891: isSameISOWeekYear ===

// Module 3891 (isSameISOWeekYear)
import startOfISOWeekYear from "startOfISOWeekYear" /* 3703 */;
import requiredArgs from "requiredArgs" /* 3543 */;

if (!startOfISOWeekYear) {
  let obj = { default: null };
  obj[0] = startOfISOWeekYear;
  let tmp3 = obj;
} else {
  tmp3 = startOfISOWeekYear;
}
startOfISOWeekYear = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isSameISOWeekYear(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = startOfISOWeekYear.default(arg0);
  const time = defaultResult1.getTime();
  return time === startOfISOWeekYear.default(arg1).getTime();
};
export default exports.default;