// _runtime/04128_subHours.js
import 03847__ from "metro/03847__.js";
import requiredArgs from "03694_requiredArgs.js";
import 03697__ from "metro/03697__.js";

if (!module_3847) {
  let obj = { default: module_3847 };
  let tmp3 = obj;
} else {
  tmp3 = module_3847;
}
module_3847 = tmp3;
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

export default function subHours(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3847.default(arg0, -module_3697.default(arg1));
};
export default exports.default;