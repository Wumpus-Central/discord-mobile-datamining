// _runtime/04415_differenceInCalendarISOWeekYears.js
import module_4388_mod from "metro/04388__.js";
import requiredArgs_mod from "04232_requiredArgs.js";

let module_4388 = module_4388_mod;
if (!module_4388) {
  const obj = { default: module_4388 };
  let tmp3 = obj;
} else {
  tmp3 = module_4388;
}
module_4388 = tmp3;
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
  return module_4388.default(arg0) - module_4388.default(arg1);
};
export default exports.default;