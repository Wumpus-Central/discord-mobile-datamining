// _runtime/04099_differenceInCalendarISOWeekYears.js
import module_4072_mod from "metro/04072__.js";
import requiredArgs_mod from "03916_requiredArgs.js";

let module_4072 = module_4072_mod;
if (!module_4072) {
  const obj = { default: module_4072 };
  let tmp3 = obj;
} else {
  tmp3 = module_4072;
}
module_4072 = tmp3;
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
  return module_4072.default(arg0) - module_4072.default(arg1);
};
export default exports.default;