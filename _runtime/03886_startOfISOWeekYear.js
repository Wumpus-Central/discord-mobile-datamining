// === Module 3886: startOfISOWeekYear ===

// Module 3886 (startOfISOWeekYear)
import module_3882 from "module_3882" /* 3882 */;
import startOfISOWeek from "startOfISOWeek" /* 3883 */;
import requiredArgs from "requiredArgs" /* 3726 */;

if (!module_3882) {
  let obj = { default: module_3882 };
  let tmp3 = obj;
} else {
  tmp3 = module_3882;
}
module_3882 = tmp3;
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

export default function startOfISOWeekYear(arg0) {
  requiredArgs.default(1, arguments);
  const date = new Date(0);
  date.setFullYear(module_3882.default(arg0), 0, 4);
  date.setHours(0, 0, 0, 0);
  return startOfISOWeek.default(date);
};
export default exports.default;