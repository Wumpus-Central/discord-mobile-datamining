// === Module 4097: differenceInCalendarISOWeekYears ===

// Module 4097 (differenceInCalendarISOWeekYears)
import module_4070_mod from "module_4070" /* 4070 */;
import requiredArgs_mod from "requiredArgs" /* 3914 */;

let module_4070 = module_4070_mod;
if (!module_4070) {
  const obj = { default: module_4070 };
  let tmp3 = obj;
} else {
  tmp3 = module_4070;
}
module_4070 = tmp3;
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
  return module_4070.default(arg0) - module_4070.default(arg1);
};
export default exports.default;