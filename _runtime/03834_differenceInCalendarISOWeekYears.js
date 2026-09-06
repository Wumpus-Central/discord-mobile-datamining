// === Module 3834: differenceInCalendarISOWeekYears ===

// Module 3834 (differenceInCalendarISOWeekYears)
import module_3807 from "module_3807" /* 3807 */;
import requiredArgs from "requiredArgs" /* 3651 */;

if (!module_3807) {
  let obj = { default: module_3807 };
  let tmp3 = obj;
} else {
  tmp3 = module_3807;
}
module_3807 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function differenceInCalendarISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3807.default(arg0) - module_3807.default(arg1);
};
export default exports.default;