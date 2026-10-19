// === Module 4415: differenceInCalendarISOWeekYears ===

// Module 4415 (differenceInCalendarISOWeekYears)
import module_4388_mod from "module_4388" /* 4388 */;
import requiredArgs_mod from "requiredArgs" /* 4232 */;

let module_4388 = module_4388_mod;
if (!module_4388) {
  const obj = { default: module_4388 };
  let tmp3 = obj;
} else {
  tmp3 = module_4388;
}
module_4388 = tmp3;
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
  return module_4388.default(arg0) - module_4388.default(arg1);
};
export default exports.default;