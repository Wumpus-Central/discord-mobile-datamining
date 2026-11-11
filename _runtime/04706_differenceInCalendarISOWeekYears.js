// === Module 4706: differenceInCalendarISOWeekYears ===

// Module 4706 (differenceInCalendarISOWeekYears)
import module_4679_mod from "module_4679" /* 4679 */;
import requiredArgs_mod from "requiredArgs" /* 4523 */;

let module_4679 = module_4679_mod;
if (!module_4679) {
  const obj = { default: module_4679 };
  let tmp3 = obj;
} else {
  tmp3 = module_4679;
}
module_4679 = tmp3;
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
  return module_4679.default(arg0) - module_4679.default(arg1);
};
export default exports.default;