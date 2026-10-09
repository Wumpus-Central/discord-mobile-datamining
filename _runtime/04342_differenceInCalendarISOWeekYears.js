// === Module 4342: differenceInCalendarISOWeekYears ===

// Module 4342 (differenceInCalendarISOWeekYears)
import module_4315_mod from "module_4315" /* 4315 */;
import requiredArgs_mod from "requiredArgs" /* 4159 */;

let module_4315 = module_4315_mod;
if (!module_4315) {
  const obj = { default: module_4315 };
  let tmp3 = obj;
} else {
  tmp3 = module_4315;
}
module_4315 = tmp3;
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
  return module_4315.default(arg0) - module_4315.default(arg1);
};
export default exports.default;