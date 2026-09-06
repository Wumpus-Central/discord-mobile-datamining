// _runtime/04087_subQuarters.js
import 03654__ from "metro/03654__.js";
import 03816__ from "metro/03816__.js";
import requiredArgs from "03651_requiredArgs.js";

if (!module_3654) {
  let obj = { default: module_3654 };
  let tmp3 = obj;
} else {
  tmp3 = module_3654;
}
module_3654 = tmp3;
if (!module_3816) {
  obj = { default: module_3816 };
  let tmp5 = obj;
} else {
  tmp5 = module_3816;
}
module_3816 = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subQuarters(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3816.default(arg0, -module_3654.default(arg1));
};
export default exports.default;