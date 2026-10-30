// === Module 4473: differenceInCalendarISOWeekYears ===

// Module 4473 (differenceInCalendarISOWeekYears)
import module_4446_mod from "module_4446" /* 4446 */;
import requiredArgs_mod from "requiredArgs" /* 4290 */;

let module_4446 = module_4446_mod;
if (!module_4446) {
  const obj = { default: module_4446 };
  let tmp3 = obj;
} else {
  tmp3 = module_4446;
}
module_4446 = tmp3;
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
  return module_4446.default(arg0) - module_4446.default(arg1);
};
export default exports.default;