// _runtime/03846_subISOWeekYears.js
import 03806__ from "metro/03806__.js";
import requiredArgs from "03651_requiredArgs.js";
import 03654__ from "metro/03654__.js";

if (!module_3806) {
  let obj = { default: module_3806 };
  let tmp3 = obj;
} else {
  tmp3 = module_3806;
}
module_3806 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
if (!module_3654) {
  obj = { default: module_3654 };
  let tmp7 = obj;
} else {
  tmp7 = module_3654;
}
module_3654 = tmp7;

export default function subISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3806.default(arg0, -module_3654.default(arg1));
};
export default exports.default;