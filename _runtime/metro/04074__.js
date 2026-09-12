// === Module 4074: ? ===

// Module 4074
import startOfISOWeekYear from "startOfISOWeekYear" /* 3886 */;
import requiredArgs from "requiredArgs" /* 3726 */;

if (!startOfISOWeekYear) {
  let obj = { default: startOfISOWeekYear };
  let tmp3 = obj;
} else {
  tmp3 = startOfISOWeekYear;
}
startOfISOWeekYear = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
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