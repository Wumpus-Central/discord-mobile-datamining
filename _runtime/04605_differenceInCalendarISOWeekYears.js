// === Module 4605: differenceInCalendarISOWeekYears ===

// Module 4605 (differenceInCalendarISOWeekYears)
import module_4578_mod from "module_4578" /* 4578 */;
import requiredArgs_mod from "requiredArgs" /* 4422 */;

let module_4578 = module_4578_mod;
if (!module_4578) {
  const obj = { default: module_4578 };
  let tmp3 = obj;
} else {
  tmp3 = module_4578;
}
module_4578 = tmp3;
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
  return module_4578.default(arg0) - module_4578.default(arg1);
};
export default exports.default;