// === Module 3852: differenceInCalendarWeeks ===

// Module 3852 (differenceInCalendarWeeks)
import startOfWeek from "startOfWeek" /* 3822 */;
import module_3826 from "module_3826" /* 3826 */;
import requiredArgs from "requiredArgs" /* 3664 */;

if (!startOfWeek) {
  let obj = { default: startOfWeek };
  let tmp3 = obj;
} else {
  tmp3 = startOfWeek;
}
startOfWeek = tmp3;
if (!module_3826) {
  obj = { default: module_3826 };
  let tmp5 = obj;
} else {
  tmp5 = module_3826;
}
module_3826 = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;
let c3 = 604800000;

export default function differenceInCalendarWeeks(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = startOfWeek.default(arg0, arg2);
  const defaultResult2 = startOfWeek.default(arg1, arg2);
  const time = defaultResult1.getTime();
  const diff = time - module_3826.default(defaultResult1);
  const time1 = defaultResult2.getTime();
  return Math.round((diff - (time1 - module_3826.default(defaultResult2))) / c3);
};
export default exports.default;