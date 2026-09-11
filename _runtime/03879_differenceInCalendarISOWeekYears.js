// _runtime/03879_differenceInCalendarISOWeekYears.js
import 03852__ from "metro/03852__.js";
import requiredArgs from "03696_requiredArgs.js";

if (!module_3852) {
  let obj = { default: module_3852 };
  let tmp3 = obj;
} else {
  tmp3 = module_3852;
}
module_3852 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function differenceInCalendarISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3852.default(arg0) - module_3852.default(arg1);
};
export default exports.default;