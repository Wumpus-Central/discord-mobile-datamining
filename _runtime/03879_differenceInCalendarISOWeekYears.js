// === Module 3879: differenceInCalendarISOWeekYears ===

// Module 3879 (differenceInCalendarISOWeekYears)
import module_3852 from "module_3852" /* 3852 */;
import requiredArgs from "requiredArgs" /* 3696 */;

if (!module_3852) {
  let obj = { default: module_3852 };
  let tmp3 = obj;
} else {
  tmp3 = module_3852;
}
module_3852 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function differenceInCalendarISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3852.default(arg0) - module_3852.default(arg1);
};
export default exports.default;