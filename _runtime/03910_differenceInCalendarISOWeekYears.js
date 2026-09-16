// === Module 3910: differenceInCalendarISOWeekYears ===

// Module 3910 (differenceInCalendarISOWeekYears)
import module_3883_mod from "module_3883" /* 3883 */;
import requiredArgs_mod from "requiredArgs" /* 3727 */;

let module_3883 = module_3883_mod;
if (!module_3883) {
  const obj = { default: module_3883 };
  let tmp3 = obj;
} else {
  tmp3 = module_3883;
}
module_3883 = tmp3;
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
  return module_3883.default(arg0) - module_3883.default(arg1);
};
export default exports.default;