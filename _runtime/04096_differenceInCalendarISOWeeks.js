// === Module 4096: differenceInCalendarISOWeeks ===

// Module 4096 (differenceInCalendarISOWeeks)
import module_4074_mod from "module_4074" /* 4074 */;
import startOfISOWeek_mod from "startOfISOWeek" /* 4069 */;
import requiredArgs_mod from "requiredArgs" /* 3912 */;

let module_4074 = module_4074_mod;
if (!module_4074) {
  const obj = { default: module_4074 };
  let tmp3 = obj;
} else {
  tmp3 = module_4074;
}
module_4074 = tmp3;
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
  const diff = time - module_4074.default(defaultResult1);
  const time1 = defaultResult2.getTime();
  return Math.round((diff - (time1 - module_4074.default(defaultResult2))) / c3);
};
export default exports.default;