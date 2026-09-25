// === Module 4099: differenceInCalendarISOWeekYears ===

// Module 4099 (differenceInCalendarISOWeekYears)
import module_4072_mod from "module_4072" /* 4072 */;
import requiredArgs_mod from "requiredArgs" /* 3916 */;

let module_4072 = module_4072_mod;
if (!module_4072) {
  const obj = { default: module_4072 };
  let tmp3 = obj;
} else {
  tmp3 = module_4072;
}
module_4072 = tmp3;
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
  return module_4072.default(arg0) - module_4072.default(arg1);
};
export default exports.default;