// === Module 4607: differenceInCalendarISOWeekYears ===

// Module 4607 (differenceInCalendarISOWeekYears)
import module_4580_mod from "module_4580" /* 4580 */;
import requiredArgs_mod from "requiredArgs" /* 4424 */;

let module_4580 = module_4580_mod;
if (!module_4580) {
  const obj = { default: module_4580 };
  let tmp3 = obj;
} else {
  tmp3 = module_4580;
}
module_4580 = tmp3;
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
  return module_4580.default(arg0) - module_4580.default(arg1);
};
export default exports.default;