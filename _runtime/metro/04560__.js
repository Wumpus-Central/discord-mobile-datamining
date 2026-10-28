// === Module 4560: ? ===

// Module 4560
import startOfISOWeekYear_mod from "startOfISOWeekYear" /* 4448 */;
import module_4455_mod from "module_4455" /* 4455 */;
import requiredArgs_mod from "requiredArgs" /* 4288 */;

let startOfISOWeekYear = startOfISOWeekYear_mod;
if (!startOfISOWeekYear) {
  const obj = { default: startOfISOWeekYear };
  let tmp3 = obj;
} else {
  tmp3 = startOfISOWeekYear;
}
startOfISOWeekYear = tmp3;
let module_4455 = module_4455_mod;
if (!module_4455) {
  const obj2 = { default: module_4455 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4455;
}
module_4455 = tmp5;
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
  const defaultResult2 = startOfISOWeekYear.default(module_4455.default(defaultResult1, 60));
  return Math.round((startOfISOWeekYear.default(module_4455.default(defaultResult1, 60)).valueOf() - defaultResult1.valueOf()) / c3);
};
export default exports.default;