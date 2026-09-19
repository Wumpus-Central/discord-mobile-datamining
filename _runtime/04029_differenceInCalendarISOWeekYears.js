// === Module 4029: differenceInCalendarISOWeekYears ===

// Module 4029 (differenceInCalendarISOWeekYears)
import module_4002_mod from "module_4002" /* 4002 */;
import requiredArgs_mod from "requiredArgs" /* 3846 */;

let module_4002 = module_4002_mod;
if (!module_4002) {
  const obj = { default: module_4002 };
  let tmp3 = obj;
} else {
  tmp3 = module_4002;
}
module_4002 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function differenceInCalendarISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4002.default(arg0) - module_4002.default(arg1);
};
export default exports.default;