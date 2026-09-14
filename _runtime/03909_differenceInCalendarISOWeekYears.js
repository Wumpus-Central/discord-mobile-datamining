// _runtime/03909_differenceInCalendarISOWeekYears.js
import module_3882_mod from "metro/03882__.js";
import requiredArgs_mod from "03726_requiredArgs.js";

let module_3882 = module_3882_mod;
if (!module_3882) {
  const obj = { default: module_3882 };
  let tmp3 = obj;
} else {
  tmp3 = module_3882;
}
module_3882 = tmp3;
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
  return module_3882.default(arg0) - module_3882.default(arg1);
};
export default exports.default;