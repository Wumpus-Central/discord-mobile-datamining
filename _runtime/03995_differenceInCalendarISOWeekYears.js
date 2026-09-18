// === Module 3995: differenceInCalendarISOWeekYears ===

// Module 3995 (differenceInCalendarISOWeekYears)
import module_3968_mod from "module_3968" /* 3968 */;
import requiredArgs_mod from "requiredArgs" /* 3812 */;

let module_3968 = module_3968_mod;
if (!module_3968) {
  const obj = { default: module_3968 };
  let tmp3 = obj;
} else {
  tmp3 = module_3968;
}
module_3968 = tmp3;
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
  return module_3968.default(arg0) - module_3968.default(arg1);
};
export default exports.default;