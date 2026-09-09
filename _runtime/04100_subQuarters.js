// _runtime/04100_subQuarters.js
import 03667__ from "metro/03667__.js";
import 03829__ from "metro/03829__.js";
import requiredArgs from "03664_requiredArgs.js";

if (!module_3667) {
  let obj = { default: module_3667 };
  let tmp3 = obj;
} else {
  tmp3 = module_3667;
}
module_3667 = tmp3;
if (!module_3829) {
  obj = { default: module_3829 };
  let tmp5 = obj;
} else {
  tmp5 = module_3829;
}
module_3829 = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subQuarters(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3829.default(arg0, -module_3667.default(arg1));
};
export default exports.default;