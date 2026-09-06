// _runtime/03834_differenceInCalendarISOWeekYears.js
import 03807__ from "metro/03807__.js";
import requiredArgs from "03651_requiredArgs.js";

if (!module_3807) {
  let obj = { default: module_3807 };
  let tmp3 = obj;
} else {
  tmp3 = module_3807;
}
module_3807 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function differenceInCalendarISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3807.default(arg0) - module_3807.default(arg1);
};
export default exports.default;