// === Module 4102: differenceInCalendarISOWeekYears ===

// Module 4102 (differenceInCalendarISOWeekYears)
import module_4075_mod from "module_4075" /* 4075 */;
import requiredArgs_mod from "requiredArgs" /* 3919 */;

let module_4075 = module_4075_mod;
if (!module_4075) {
  const obj = { default: module_4075 };
  let tmp3 = obj;
} else {
  tmp3 = module_4075;
}
module_4075 = tmp3;
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
  return module_4075.default(arg0) - module_4075.default(arg1);
};
export default exports.default;