// === Module 4038: lastDayOfISOWeekYear ===

// Module 4038 (lastDayOfISOWeekYear)
import module_3820 from "module_3820" /* 3820 */;
import startOfISOWeek from "startOfISOWeek" /* 3821 */;
import requiredArgs from "requiredArgs" /* 3664 */;

if (!module_3820) {
  let obj = { default: module_3820 };
  let tmp3 = obj;
} else {
  tmp3 = module_3820;
}
module_3820 = tmp3;
if (!startOfISOWeek) {
  obj = { default: startOfISOWeek };
  let tmp5 = obj;
} else {
  tmp5 = startOfISOWeek;
}
startOfISOWeek = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function lastDayOfISOWeekYear(arg0) {
  requiredArgs.default(1, arguments);
  const date = new Date(0);
  date.setFullYear(module_3820.default(arg0) + 1, 0, 4);
  date.setHours(0, 0, 0, 0);
  const defaultResult2 = startOfISOWeek.default(date);
  defaultResult2.setDate(defaultResult2.getDate() - 1);
  return defaultResult2;
};
export default exports.default;