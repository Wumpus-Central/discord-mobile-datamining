// _runtime/metro/03806__.js
import 03654__ from "03654__.js";
import 03807__ from "03807__.js";
import 03810__ from "03810__.js";
import requiredArgs from "../03651_requiredArgs.js";

if (!module_3654) {
  let obj = { default: module_3654 };
  let tmp3 = obj;
} else {
  tmp3 = module_3654;
}
module_3654 = tmp3;
if (!module_3807) {
  obj = { default: module_3807 };
  let tmp5 = obj;
} else {
  tmp5 = module_3807;
}
module_3807 = tmp5;
if (!module_3810) {
  obj = { default: module_3810 };
  let tmp7 = obj;
} else {
  tmp7 = module_3810;
}
module_3810 = tmp7;
if (!requiredArgs) {
  const obj1 = { default: requiredArgs };
  let tmp9 = obj1;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function addISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3810.default(arg0, module_3807.default(arg0) + module_3654.default(arg1));
};
export default exports.default;