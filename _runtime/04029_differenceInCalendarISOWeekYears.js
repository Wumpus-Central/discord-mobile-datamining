// _runtime/04029_differenceInCalendarISOWeekYears.js
import module_4002_mod from "metro/04002__.js";
import requiredArgs_mod from "03846_requiredArgs.js";

let module_4002 = module_4002_mod;
if (!module_4002) {
  const obj = { default: module_4002 };
  let tmp3 = obj;
} else {
  tmp3 = module_4002;
}
module_4002 = tmp3;
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
  return module_4002.default(arg0) - module_4002.default(arg1);
};
export default exports.default;