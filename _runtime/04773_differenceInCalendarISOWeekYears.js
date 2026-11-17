// _runtime/04773_differenceInCalendarISOWeekYears.js
import module_4746_mod from "metro/04746__.js";
import requiredArgs_mod from "04590_requiredArgs.js";

let module_4746 = module_4746_mod;
if (!module_4746) {
  const obj = { default: module_4746 };
  let tmp3 = obj;
} else {
  tmp3 = module_4746;
}
module_4746 = tmp3;
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
  return module_4746.default(arg0) - module_4746.default(arg1);
};
export default exports.default;