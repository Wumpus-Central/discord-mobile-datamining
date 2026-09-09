// _runtime/metro/03819__.js
import 03667__ from "03667__.js";
import 03820__ from "03820__.js";
import 03823__ from "03823__.js";
import requiredArgs from "../03664_requiredArgs.js";

if (!module_3667) {
  let obj = { default: module_3667 };
  let tmp3 = obj;
} else {
  tmp3 = module_3667;
}
module_3667 = tmp3;
if (!module_3820) {
  obj = { default: module_3820 };
  let tmp5 = obj;
} else {
  tmp5 = module_3820;
}
module_3820 = tmp5;
if (!module_3823) {
  obj = { default: module_3823 };
  let tmp7 = obj;
} else {
  tmp7 = module_3823;
}
module_3823 = tmp7;
if (!requiredArgs) {
  const obj1 = { default: requiredArgs };
  let tmp9 = obj1;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function addISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3823.default(arg0, module_3820.default(arg0) + module_3667.default(arg1));
};
export default exports.default;