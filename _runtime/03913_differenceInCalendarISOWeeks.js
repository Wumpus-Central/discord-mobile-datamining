// === Module 3913: differenceInCalendarISOWeeks ===

// Module 3913 (differenceInCalendarISOWeeks)
import module_3891_mod from "module_3891" /* 3891 */;
import startOfISOWeek_mod from "startOfISOWeek" /* 3886 */;
import requiredArgs_mod from "requiredArgs" /* 3729 */;

let module_3891 = module_3891_mod;
if (!module_3891) {
  const obj = { default: module_3891 };
  let tmp3 = obj;
} else {
  tmp3 = module_3891;
}
module_3891 = tmp3;
let startOfISOWeek = startOfISOWeek_mod;
if (!startOfISOWeek) {
  const obj2 = { default: startOfISOWeek };
  let tmp5 = obj2;
} else {
  tmp5 = startOfISOWeek;
}
startOfISOWeek = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
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
  const diff = time - module_3891.default(defaultResult1);
  const time1 = defaultResult2.getTime();
  return Math.round((diff - (time1 - module_3891.default(defaultResult2))) / c3);
};
export default exports.default;