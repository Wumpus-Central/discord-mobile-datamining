// === Module 4444: differenceInCalendarWeeks ===

// Module 4444 (differenceInCalendarWeeks)
import startOfWeek_mod from "startOfWeek" /* 4414 */;
import module_4418_mod from "module_4418" /* 4418 */;
import requiredArgs_mod from "requiredArgs" /* 4256 */;

let startOfWeek = startOfWeek_mod;
if (!startOfWeek) {
  const obj = { default: startOfWeek };
  let tmp3 = obj;
} else {
  tmp3 = startOfWeek;
}
startOfWeek = tmp3;
let module_4418 = module_4418_mod;
if (!module_4418) {
  const obj2 = { default: module_4418 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4418;
}
module_4418 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
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
  const diff = time - module_4418.default(defaultResult1);
  const time1 = defaultResult2.getTime();
  return Math.round((diff - (time1 - module_4418.default(defaultResult2))) / c3);
};
export default exports.default;