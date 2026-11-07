// === Module 4604: differenceInCalendarISOWeekYears ===

// Module 4604 (differenceInCalendarISOWeekYears)
import module_4577_mod from "module_4577" /* 4577 */;
import requiredArgs_mod from "requiredArgs" /* 4421 */;

let module_4577 = module_4577_mod;
if (!module_4577) {
  const obj = { default: module_4577 };
  let tmp3 = obj;
} else {
  tmp3 = module_4577;
}
module_4577 = tmp3;
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
  return module_4577.default(arg0) - module_4577.default(arg1);
};
export default exports.default;