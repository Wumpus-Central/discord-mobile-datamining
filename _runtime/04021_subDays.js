// _runtime/04021_subDays.js
import 03798__ from "metro/03798__.js";
import requiredArgs from "03651_requiredArgs.js";
import 03654__ from "metro/03654__.js";

if (!module_3798) {
  let obj = { default: module_3798 };
  let tmp3 = obj;
} else {
  tmp3 = module_3798;
}
module_3798 = tmp3;
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

export default function subDays(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3798.default(arg0, -module_3654.default(arg1));
};
export default exports.default;