// === Module 4471: differenceInCalendarISOWeekYears ===

// Module 4471 (differenceInCalendarISOWeekYears)
import module_4444_mod from "module_4444" /* 4444 */;
import requiredArgs_mod from "requiredArgs" /* 4288 */;

let module_4444 = module_4444_mod;
if (!module_4444) {
  const obj = { default: module_4444 };
  let tmp3 = obj;
} else {
  tmp3 = module_4444;
}
module_4444 = tmp3;
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
  return module_4444.default(arg0) - module_4444.default(arg1);
};
export default exports.default;