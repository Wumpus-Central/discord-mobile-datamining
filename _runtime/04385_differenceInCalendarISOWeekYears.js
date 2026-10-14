// === Module 4385: differenceInCalendarISOWeekYears ===

// Module 4385 (differenceInCalendarISOWeekYears)
import module_4358_mod from "module_4358" /* 4358 */;
import requiredArgs_mod from "requiredArgs" /* 4202 */;

let module_4358 = module_4358_mod;
if (!module_4358) {
  const obj = { default: module_4358 };
  let tmp3 = obj;
} else {
  tmp3 = module_4358;
}
module_4358 = tmp3;
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
  return module_4358.default(arg0) - module_4358.default(arg1);
};
export default exports.default;