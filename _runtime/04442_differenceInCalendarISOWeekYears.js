// _runtime/04442_differenceInCalendarISOWeekYears.js
import module_4415_mod from "metro/04415__.js";
import requiredArgs_mod from "04259_requiredArgs.js";

let module_4415 = module_4415_mod;
if (!module_4415) {
  const obj = { default: module_4415 };
  let tmp3 = obj;
} else {
  tmp3 = module_4415;
}
module_4415 = tmp3;
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
  return module_4415.default(arg0) - module_4415.default(arg1);
};
export default exports.default;