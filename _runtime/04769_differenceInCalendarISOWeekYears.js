// === Module 4769: differenceInCalendarISOWeekYears ===

// Module 4769 (differenceInCalendarISOWeekYears)
import module_4742_mod from "module_4742" /* 4742 */;
import requiredArgs_mod from "requiredArgs" /* 4586 */;

let module_4742 = module_4742_mod;
if (!module_4742) {
  const obj = { default: module_4742 };
  let tmp3 = obj;
} else {
  tmp3 = module_4742;
}
module_4742 = tmp3;
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
  return module_4742.default(arg0) - module_4742.default(arg1);
};
export default exports.default;