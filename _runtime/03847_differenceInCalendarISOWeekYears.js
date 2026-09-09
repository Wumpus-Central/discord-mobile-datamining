// === Module 3847: differenceInCalendarISOWeekYears ===

// Module 3847 (differenceInCalendarISOWeekYears)
import module_3820 from "module_3820" /* 3820 */;
import requiredArgs from "requiredArgs" /* 3664 */;

if (!module_3820) {
  let obj = { default: module_3820 };
  let tmp3 = obj;
} else {
  tmp3 = module_3820;
}
module_3820 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function differenceInCalendarISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3820.default(arg0) - module_3820.default(arg1);
};
export default exports.default;