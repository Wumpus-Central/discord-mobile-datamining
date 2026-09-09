// _runtime/04102_subWeeks.js
import 03667__ from "metro/03667__.js";
import 03831__ from "metro/03831__.js";
import requiredArgs from "03664_requiredArgs.js";

if (!module_3667) {
  let obj = { default: module_3667 };
  let tmp3 = obj;
} else {
  tmp3 = module_3667;
}
module_3667 = tmp3;
if (!module_3831) {
  obj = { default: module_3831 };
  let tmp5 = obj;
} else {
  tmp5 = module_3831;
}
module_3831 = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subWeeks(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3831.default(arg0, -module_3667.default(arg1));
};
export default exports.default;