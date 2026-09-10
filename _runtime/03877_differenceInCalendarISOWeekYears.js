// === Module 3877: differenceInCalendarISOWeekYears ===

// Module 3877 (differenceInCalendarISOWeekYears)
import module_3850 from "module_3850" /* 3850 */;
import requiredArgs from "requiredArgs" /* 3694 */;

if (!module_3850) {
  let obj = { default: module_3850 };
  let tmp3 = obj;
} else {
  tmp3 = module_3850;
}
module_3850 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function differenceInCalendarISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3850.default(arg0) - module_3850.default(arg1);
};
export default exports.default;