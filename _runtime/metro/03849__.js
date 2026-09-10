// _runtime/metro/03849__.js
import 03697__ from "03697__.js";
import 03850__ from "03850__.js";
import 03853__ from "03853__.js";
import requiredArgs from "../03694_requiredArgs.js";

if (!module_3697) {
  let obj = { default: module_3697 };
  let tmp3 = obj;
} else {
  tmp3 = module_3697;
}
module_3697 = tmp3;
if (!module_3850) {
  obj = { default: module_3850 };
  let tmp5 = obj;
} else {
  tmp5 = module_3850;
}
module_3850 = tmp5;
if (!module_3853) {
  obj = { default: module_3853 };
  let tmp7 = obj;
} else {
  tmp7 = module_3853;
}
module_3853 = tmp7;
if (!requiredArgs) {
  const obj1 = { default: requiredArgs };
  let tmp9 = obj1;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function addISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3853.default(arg0, module_3850.default(arg0) + module_3697.default(arg1));
};
export default exports.default;