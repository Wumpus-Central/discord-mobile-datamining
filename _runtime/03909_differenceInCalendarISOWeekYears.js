// _runtime/03909_differenceInCalendarISOWeekYears.js
import 03882__ from "metro/03882__.js";
import requiredArgs from "03726_requiredArgs.js";

if (!module_3882) {
  let obj = { default: module_3882 };
  let tmp3 = obj;
} else {
  tmp3 = module_3882;
}
module_3882 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function differenceInCalendarISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3882.default(arg0) - module_3882.default(arg1);
};
export default exports.default;