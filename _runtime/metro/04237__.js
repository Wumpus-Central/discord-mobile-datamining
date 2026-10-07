// === Module 4237: ? ===

// Module 4237
import startOfISOWeekYear_mod from "startOfISOWeekYear" /* 4125 */;
import module_4132_mod from "module_4132" /* 4132 */;
import requiredArgs_mod from "requiredArgs" /* 3965 */;

let startOfISOWeekYear = startOfISOWeekYear_mod;
if (!startOfISOWeekYear) {
  const obj = { default: startOfISOWeekYear };
  let tmp3 = obj;
} else {
  tmp3 = startOfISOWeekYear;
}
startOfISOWeekYear = tmp3;
let module_4132 = module_4132_mod;
if (!module_4132) {
  const obj2 = { default: module_4132 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4132;
}
module_4132 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;
let c3 = 604800000;

export default function getISOWeeksInYear(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = startOfISOWeekYear.default(arg0);
  const defaultResult2 = startOfISOWeekYear.default(module_4132.default(defaultResult1, 60));
  return Math.round((startOfISOWeekYear.default(module_4132.default(defaultResult1, 60)).valueOf() - defaultResult1.valueOf()) / c3);
};
export default exports.default;