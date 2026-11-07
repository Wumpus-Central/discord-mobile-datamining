// === Module 4605: differenceInCalendarISOWeeks ===

// Module 4605 (differenceInCalendarISOWeeks)
import module_4583_mod from "module_4583" /* 4583 */;
import startOfISOWeek_mod from "startOfISOWeek" /* 4578 */;
import requiredArgs_mod from "requiredArgs" /* 4421 */;

let module_4583 = module_4583_mod;
if (!module_4583) {
  const obj = { default: module_4583 };
  let tmp3 = obj;
} else {
  tmp3 = module_4583;
}
module_4583 = tmp3;
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
  const diff = time - module_4583.default(defaultResult1);
  const time1 = defaultResult2.getTime();
  return Math.round((diff - (time1 - module_4583.default(defaultResult2))) / c3);
};
export default exports.default;