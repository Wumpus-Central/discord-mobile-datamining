// _runtime/04383_differenceInCalendarISOWeekYears.js
import module_4356_mod from "metro/04356__.js";
import requiredArgs_mod from "04200_requiredArgs.js";

let module_4356 = module_4356_mod;
if (!module_4356) {
  const obj = { default: module_4356 };
  let tmp3 = obj;
} else {
  tmp3 = module_4356;
}
module_4356 = tmp3;
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
  return module_4356.default(arg0) - module_4356.default(arg1);
};
export default exports.default;