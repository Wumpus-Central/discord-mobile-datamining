// === Module 4068: lastDayOfISOWeekYear ===

// Module 4068 (lastDayOfISOWeekYear)
import module_3850 from "module_3850" /* 3850 */;
import startOfISOWeek from "startOfISOWeek" /* 3851 */;
import requiredArgs from "requiredArgs" /* 3694 */;

if (!module_3850) {
  let obj = { default: module_3850 };
  let tmp3 = obj;
} else {
  tmp3 = module_3850;
}
module_3850 = tmp3;
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
  date.setFullYear(module_3850.default(arg0) + 1, 0, 4);
  date.setHours(0, 0, 0, 0);
  const defaultResult2 = startOfISOWeek.default(date);
  defaultResult2.setDate(defaultResult2.getDate() - 1);
  return defaultResult2;
};
export default exports.default;