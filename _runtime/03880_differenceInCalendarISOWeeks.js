// === Module 3880: differenceInCalendarISOWeeks ===

// Module 3880 (differenceInCalendarISOWeeks)
import module_3858 from "module_3858" /* 3858 */;
import startOfISOWeek from "startOfISOWeek" /* 3853 */;
import requiredArgs from "requiredArgs" /* 3696 */;

if (!module_3858) {
  let obj = { default: module_3858 };
  let tmp3 = obj;
} else {
  tmp3 = module_3858;
}
module_3858 = tmp3;
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
  const diff = time - module_3858.default(defaultResult1);
  const time1 = defaultResult2.getTime();
  return Math.round((diff - (time1 - module_3858.default(defaultResult2))) / c3);
};
export default exports.default;