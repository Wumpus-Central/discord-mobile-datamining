// _runtime/04634_differenceInCalendarISOWeekYears.js
import module_4607_mod from "metro/04607__.js";
import requiredArgs_mod from "04451_requiredArgs.js";

let module_4607 = module_4607_mod;
if (!module_4607) {
  const obj = { default: module_4607 };
  let tmp3 = obj;
} else {
  tmp3 = module_4607;
}
module_4607 = tmp3;
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
  return module_4607.default(arg0) - module_4607.default(arg1);
};
export default exports.default;