// _runtime/04097_differenceInCalendarISOWeekYears.js
import module_4070_mod from "metro/04070__.js";
import requiredArgs_mod from "03914_requiredArgs.js";

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