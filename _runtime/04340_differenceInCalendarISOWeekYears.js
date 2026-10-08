// _runtime/04340_differenceInCalendarISOWeekYears.js
import module_4313_mod from "metro/04313__.js";
import requiredArgs_mod from "04157_requiredArgs.js";

let module_4313 = module_4313_mod;
if (!module_4313) {
  const obj = { default: module_4313 };
  let tmp3 = obj;
} else {
  tmp3 = module_4313;
}
module_4313 = tmp3;
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
  return module_4313.default(arg0) - module_4313.default(arg1);
};
export default exports.default;