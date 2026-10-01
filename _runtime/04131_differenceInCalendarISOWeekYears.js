// === Module 4131: differenceInCalendarISOWeekYears ===

// Module 4131 (differenceInCalendarISOWeekYears)
import module_4104_mod from "module_4104" /* 4104 */;
import requiredArgs_mod from "requiredArgs" /* 3948 */;

let module_4104 = module_4104_mod;
if (!module_4104) {
  const obj = { default: module_4104 };
  let tmp3 = obj;
} else {
  tmp3 = module_4104;
}
module_4104 = tmp3;
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
  return module_4104.default(arg0) - module_4104.default(arg1);
};
export default exports.default;