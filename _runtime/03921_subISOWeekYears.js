// _runtime/03921_subISOWeekYears.js
import 03881__ from "metro/03881__.js";
import requiredArgs from "03726_requiredArgs.js";
import 03729__ from "metro/03729__.js";

if (!module_3881) {
  let obj = { default: module_3881 };
  let tmp3 = obj;
} else {
  tmp3 = module_3881;
}
module_3881 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
if (!module_3729) {
  obj = { default: module_3729 };
  let tmp7 = obj;
} else {
  tmp7 = module_3729;
}
module_3729 = tmp7;

export default function subISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3881.default(arg0, -module_3729.default(arg1));
};
export default exports.default;