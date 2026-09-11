// _runtime/metro/03851__.js
import 03699__ from "03699__.js";
import 03852__ from "03852__.js";
import 03855__ from "03855__.js";
import requiredArgs from "../03696_requiredArgs.js";

if (!module_3699) {
  let obj = { default: module_3699 };
  let tmp3 = obj;
} else {
  tmp3 = module_3699;
}
module_3699 = tmp3;
if (!module_3852) {
  obj = { default: module_3852 };
  let tmp5 = obj;
} else {
  tmp5 = module_3852;
}
module_3852 = tmp5;
if (!module_3855) {
  obj = { default: module_3855 };
  let tmp7 = obj;
} else {
  tmp7 = module_3855;
}
module_3855 = tmp7;
if (!requiredArgs) {
  const obj1 = { default: requiredArgs };
  let tmp9 = obj1;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function addISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3855.default(arg0, module_3852.default(arg0) + module_3699.default(arg1));
};
export default exports.default;