// _runtime/04103_subYears.js
import 03667__ from "metro/03667__.js";
import 03832__ from "metro/03832__.js";
import requiredArgs from "03664_requiredArgs.js";

if (!module_3667) {
  let obj = { default: module_3667 };
  let tmp3 = obj;
} else {
  tmp3 = module_3667;
}
module_3667 = tmp3;
if (!module_3832) {
  obj = { default: module_3832 };
  let tmp5 = obj;
} else {
  tmp5 = module_3832;
}
module_3832 = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3832.default(arg0, -module_3667.default(arg1));
};
export default exports.default;