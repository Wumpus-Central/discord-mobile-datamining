// === Module 4383: differenceInCalendarISOWeekYears ===

// Module 4383 (differenceInCalendarISOWeekYears)
import module_4356_mod from "module_4356" /* 4356 */;
import requiredArgs_mod from "requiredArgs" /* 4200 */;

let module_4356 = module_4356_mod;
if (!module_4356) {
  const obj = { default: module_4356 };
  let tmp3 = obj;
} else {
  tmp3 = module_4356;
}
module_4356 = tmp3;
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
  return module_4356.default(arg0) - module_4356.default(arg1);
};
export default exports.default;