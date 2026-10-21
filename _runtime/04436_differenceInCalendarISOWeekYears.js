// _runtime/04436_differenceInCalendarISOWeekYears.js
import module_4409_mod from "metro/04409__.js";
import requiredArgs_mod from "04253_requiredArgs.js";

let module_4409 = module_4409_mod;
if (!module_4409) {
  const obj = { default: module_4409 };
  let tmp3 = obj;
} else {
  tmp3 = module_4409;
}
module_4409 = tmp3;
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
  return module_4409.default(arg0) - module_4409.default(arg1);
};
export default exports.default;