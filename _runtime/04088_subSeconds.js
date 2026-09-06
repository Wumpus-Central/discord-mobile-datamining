// _runtime/04088_subSeconds.js
import 03654__ from "metro/03654__.js";
import 03817__ from "metro/03817__.js";
import requiredArgs from "03651_requiredArgs.js";

if (!module_3654) {
  let obj = { default: module_3654 };
  let tmp3 = obj;
} else {
  tmp3 = module_3654;
}
module_3654 = tmp3;
if (!module_3817) {
  obj = { default: module_3817 };
  let tmp5 = obj;
} else {
  tmp5 = module_3817;
}
module_3817 = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subSeconds(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3817.default(arg0, -module_3654.default(arg1));
};
export default exports.default;