// === Module 4340: differenceInCalendarISOWeekYears ===

// Module 4340 (differenceInCalendarISOWeekYears)
import module_4313_mod from "module_4313" /* 4313 */;
import requiredArgs_mod from "requiredArgs" /* 4157 */;

let module_4313 = module_4313_mod;
if (!module_4313) {
  const obj = { default: module_4313 };
  let tmp3 = obj;
} else {
  tmp3 = module_4313;
}
module_4313 = tmp3;
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
  return module_4313.default(arg0) - module_4313.default(arg1);
};
export default exports.default;