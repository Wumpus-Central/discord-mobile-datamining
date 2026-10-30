// _runtime/04473_differenceInCalendarISOWeekYears.js
import module_4446_mod from "metro/04446__.js";
import requiredArgs_mod from "04290_requiredArgs.js";

let module_4446 = module_4446_mod;
if (!module_4446) {
  const obj = { default: module_4446 };
  let tmp3 = obj;
} else {
  tmp3 = module_4446;
}
module_4446 = tmp3;
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
  return module_4446.default(arg0) - module_4446.default(arg1);
};
export default exports.default;