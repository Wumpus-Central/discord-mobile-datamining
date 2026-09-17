// === Module 3912: differenceInCalendarISOWeekYears ===

// Module 3912 (differenceInCalendarISOWeekYears)
import module_3885_mod from "module_3885" /* 3885 */;
import requiredArgs_mod from "requiredArgs" /* 3729 */;

let module_3885 = module_3885_mod;
if (!module_3885) {
  const obj = { default: module_3885 };
  let tmp3 = obj;
} else {
  tmp3 = module_3885;
}
module_3885 = tmp3;
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
  return module_3885.default(arg0) - module_3885.default(arg1);
};
export default exports.default;