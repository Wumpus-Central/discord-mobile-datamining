// _runtime/metro/03816__.js
import 03654__ from "03654__.js";
import 03799__ from "03799__.js";
import requiredArgs from "../03651_requiredArgs.js";

if (!module_3654) {
  let obj = { default: module_3654 };
  let tmp3 = obj;
} else {
  tmp3 = module_3654;
}
module_3654 = tmp3;
if (!module_3799) {
  obj = { default: module_3799 };
  let tmp5 = obj;
} else {
  tmp5 = module_3799;
}
module_3799 = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addQuarters(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3799.default(arg0, 3 * module_3654.default(arg1));
};
export default exports.default;