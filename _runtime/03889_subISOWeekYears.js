// _runtime/03889_subISOWeekYears.js
import 03849__ from "metro/03849__.js";
import requiredArgs from "03694_requiredArgs.js";
import 03697__ from "metro/03697__.js";

if (!module_3849) {
  let obj = { default: module_3849 };
  let tmp3 = obj;
} else {
  tmp3 = module_3849;
}
module_3849 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
if (!module_3697) {
  obj = { default: module_3697 };
  let tmp7 = obj;
} else {
  tmp7 = module_3697;
}
module_3697 = tmp7;

export default function subISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3849.default(arg0, -module_3697.default(arg1));
};
export default exports.default;