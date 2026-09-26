// _runtime/04102_differenceInCalendarISOWeekYears.js
import module_4075_mod from "metro/04075__.js";
import requiredArgs_mod from "03919_requiredArgs.js";

let module_4075 = module_4075_mod;
if (!module_4075) {
  const obj = { default: module_4075 };
  let tmp3 = obj;
} else {
  tmp3 = module_4075;
}
module_4075 = tmp3;
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
  return module_4075.default(arg0) - module_4075.default(arg1);
};
export default exports.default;