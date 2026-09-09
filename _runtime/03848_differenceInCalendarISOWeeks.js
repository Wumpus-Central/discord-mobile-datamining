// === Module 3848: differenceInCalendarISOWeeks ===

// Module 3848 (differenceInCalendarISOWeeks)
import module_3826 from "module_3826" /* 3826 */;
import startOfISOWeek from "startOfISOWeek" /* 3821 */;
import requiredArgs from "requiredArgs" /* 3664 */;

if (!module_3826) {
  let obj = { default: module_3826 };
  let tmp3 = obj;
} else {
  tmp3 = module_3826;
}
module_3826 = tmp3;
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
let c3 = 604800000;

export default function differenceInCalendarISOWeeks(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = startOfISOWeek.default(arg0);
  const defaultResult2 = startOfISOWeek.default(arg1);
  const time = defaultResult1.getTime();
  const diff = time - module_3826.default(defaultResult1);
  const time1 = defaultResult2.getTime();
  return Math.round((diff - (time1 - module_3826.default(defaultResult2))) / c3);
};
export default exports.default;