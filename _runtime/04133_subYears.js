// _runtime/04133_subYears.js
import 03697__ from "metro/03697__.js";
import 03862__ from "metro/03862__.js";
import requiredArgs from "03694_requiredArgs.js";

if (!module_3697) {
  let obj = { default: module_3697 };
  let tmp3 = obj;
} else {
  tmp3 = module_3697;
}
module_3697 = tmp3;
if (!module_3862) {
  obj = { default: module_3862 };
  let tmp5 = obj;
} else {
  tmp5 = module_3862;
}
module_3862 = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3862.default(arg0, -module_3697.default(arg1));
};
export default exports.default;