// === Module 4132: differenceInCalendarISOWeekYears ===

// Module 4132 (differenceInCalendarISOWeekYears)
import module_4105_mod from "module_4105" /* 4105 */;
import requiredArgs_mod from "requiredArgs" /* 3949 */;

let module_4105 = module_4105_mod;
if (!module_4105) {
  const obj = { default: module_4105 };
  let tmp3 = obj;
} else {
  tmp3 = module_4105;
}
module_4105 = tmp3;
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
  return module_4105.default(arg0) - module_4105.default(arg1);
};
export default exports.default;