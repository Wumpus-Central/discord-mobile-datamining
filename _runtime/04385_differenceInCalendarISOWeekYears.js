// _runtime/04385_differenceInCalendarISOWeekYears.js
import module_4358_mod from "metro/04358__.js";
import requiredArgs_mod from "04202_requiredArgs.js";

let module_4358 = module_4358_mod;
if (!module_4358) {
  const obj = { default: module_4358 };
  let tmp3 = obj;
} else {
  tmp3 = module_4358;
}
module_4358 = tmp3;
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
  return module_4358.default(arg0) - module_4358.default(arg1);
};
export default exports.default;