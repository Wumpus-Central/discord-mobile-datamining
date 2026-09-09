// === Module 3936: ? ===

// Module 3936
import startOfISOWeekYear from "startOfISOWeekYear" /* 3824 */;
import module_3831 from "module_3831" /* 3831 */;
import requiredArgs from "requiredArgs" /* 3664 */;

if (!startOfISOWeekYear) {
  let obj = { default: startOfISOWeekYear };
  let tmp3 = obj;
} else {
  tmp3 = startOfISOWeekYear;
}
startOfISOWeekYear = tmp3;
if (!module_3831) {
  obj = { default: module_3831 };
  let tmp5 = obj;
} else {
  tmp5 = module_3831;
}
module_3831 = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;
let c3 = 604800000;

export default function getISOWeeksInYear(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = startOfISOWeekYear.default(arg0);
  const defaultResult2 = startOfISOWeekYear.default(module_3831.default(defaultResult1, 60));
  return Math.round((startOfISOWeekYear.default(module_3831.default(defaultResult1, 60)).valueOf() - defaultResult1.valueOf()) / c3);
};
export default exports.default;