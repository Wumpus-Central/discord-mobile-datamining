// _runtime/04604_differenceInCalendarISOWeekYears.js
import module_4577_mod from "metro/04577__.js";
import requiredArgs_mod from "04421_requiredArgs.js";

let module_4577 = module_4577_mod;
if (!module_4577) {
  const obj = { default: module_4577 };
  let tmp3 = obj;
} else {
  tmp3 = module_4577;
}
module_4577 = tmp3;
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
  return module_4577.default(arg0) - module_4577.default(arg1);
};
export default exports.default;