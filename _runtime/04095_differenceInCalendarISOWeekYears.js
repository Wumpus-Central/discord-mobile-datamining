// === Module 4095: differenceInCalendarISOWeekYears ===

// Module 4095 (differenceInCalendarISOWeekYears)
import module_4068_mod from "module_4068" /* 4068 */;
import requiredArgs_mod from "requiredArgs" /* 3912 */;

let module_4068 = module_4068_mod;
if (!module_4068) {
  const obj = { default: module_4068 };
  let tmp3 = obj;
} else {
  tmp3 = module_4068;
}
module_4068 = tmp3;
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
  return module_4068.default(arg0) - module_4068.default(arg1);
};
export default exports.default;