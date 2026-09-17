// _runtime/03912_differenceInCalendarISOWeekYears.js
import module_3885_mod from "metro/03885__.js";
import requiredArgs_mod from "03729_requiredArgs.js";

let module_3885 = module_3885_mod;
if (!module_3885) {
  const obj = { default: module_3885 };
  let tmp3 = obj;
} else {
  tmp3 = module_3885;
}
module_3885 = tmp3;
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
  return module_3885.default(arg0) - module_3885.default(arg1);
};
export default exports.default;