// === Module 4609: differenceInCalendarWeeks ===

// Module 4609 (differenceInCalendarWeeks)
import startOfWeek_mod from "startOfWeek" /* 4579 */;
import module_4583_mod from "module_4583" /* 4583 */;
import requiredArgs_mod from "requiredArgs" /* 4421 */;

let startOfWeek = startOfWeek_mod;
if (!startOfWeek) {
  const obj = { default: startOfWeek };
  let tmp3 = obj;
} else {
  tmp3 = startOfWeek;
}
startOfWeek = tmp3;
let module_4583 = module_4583_mod;
if (!module_4583) {
  const obj2 = { default: module_4583 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4583;
}
module_4583 = tmp5;
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
  const diff = time - module_4583.default(defaultResult1);
  const time1 = defaultResult2.getTime();
  return Math.round((diff - (time1 - module_4583.default(defaultResult2))) / c3);
};
export default exports.default;