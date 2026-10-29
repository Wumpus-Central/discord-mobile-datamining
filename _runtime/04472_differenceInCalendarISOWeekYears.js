// === Module 4472: differenceInCalendarISOWeekYears ===

// Module 4472 (differenceInCalendarISOWeekYears)
import module_4445_mod from "module_4445" /* 4445 */;
import requiredArgs_mod from "requiredArgs" /* 4289 */;

let module_4445 = module_4445_mod;
if (!module_4445) {
  const obj = { default: module_4445 };
  let tmp3 = obj;
} else {
  tmp3 = module_4445;
}
module_4445 = tmp3;
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
  return module_4445.default(arg0) - module_4445.default(arg1);
};
export default exports.default;