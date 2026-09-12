// === Module 3909: differenceInCalendarISOWeekYears ===

// Module 3909 (differenceInCalendarISOWeekYears)
import module_3882 from "module_3882" /* 3882 */;
import requiredArgs from "requiredArgs" /* 3726 */;

if (!module_3882) {
  let obj = { default: module_3882 };
  let tmp3 = obj;
} else {
  tmp3 = module_3882;
}
module_3882 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function differenceInCalendarISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3882.default(arg0) - module_3882.default(arg1);
};
export default exports.default;