// === Module 4142: differenceInCalendarISOWeekYears ===

// Module 4142 (differenceInCalendarISOWeekYears)
import module_4115_mod from "module_4115" /* 4115 */;
import requiredArgs_mod from "requiredArgs" /* 3959 */;

let module_4115 = module_4115_mod;
if (!module_4115) {
  const obj = { default: module_4115 };
  let tmp3 = obj;
} else {
  tmp3 = module_4115;
}
module_4115 = tmp3;
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
  return module_4115.default(arg0) - module_4115.default(arg1);
};
export default exports.default;