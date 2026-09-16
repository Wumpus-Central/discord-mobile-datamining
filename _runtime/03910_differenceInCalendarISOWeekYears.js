// _runtime/03910_differenceInCalendarISOWeekYears.js
import module_3883_mod from "metro/03883__.js";
import requiredArgs_mod from "03727_requiredArgs.js";

let module_3883 = module_3883_mod;
if (!module_3883) {
  const obj = { default: module_3883 };
  let tmp3 = obj;
} else {
  tmp3 = module_3883;
}
module_3883 = tmp3;
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
  return module_3883.default(arg0) - module_3883.default(arg1);
};
export default exports.default;