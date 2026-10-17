// === Module 4478: differenceInCalendarISOWeekYears ===

// Module 4478 (differenceInCalendarISOWeekYears)
import module_4451_mod from "module_4451" /* 4451 */;
import requiredArgs_mod from "requiredArgs" /* 4295 */;

let module_4451 = module_4451_mod;
if (!module_4451) {
  const obj = { default: module_4451 };
  let tmp3 = obj;
} else {
  tmp3 = module_4451;
}
module_4451 = tmp3;
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
  return module_4451.default(arg0) - module_4451.default(arg1);
};
export default exports.default;