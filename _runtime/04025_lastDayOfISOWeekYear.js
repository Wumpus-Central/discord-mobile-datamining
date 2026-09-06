// === Module 4025: lastDayOfISOWeekYear ===

// Module 4025 (lastDayOfISOWeekYear)
import module_3807 from "module_3807" /* 3807 */;
import startOfISOWeek from "startOfISOWeek" /* 3808 */;
import requiredArgs from "requiredArgs" /* 3651 */;

if (!module_3807) {
  let obj = { default: module_3807 };
  let tmp3 = obj;
} else {
  tmp3 = module_3807;
}
module_3807 = tmp3;
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
  date.setFullYear(module_3807.default(arg0) + 1, 0, 4);
  date.setHours(0, 0, 0, 0);
  const defaultResult2 = startOfISOWeek.default(date);
  defaultResult2.setDate(defaultResult2.getDate() - 1);
  return defaultResult2;
};
export default exports.default;