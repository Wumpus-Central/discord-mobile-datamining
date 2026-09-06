// _runtime/metro/04016__.js
import 03798__ from "03798__.js";
import 03831__ from "03831__.js";
import requiredArgs from "../03651_requiredArgs.js";

if (!module_3798) {
  let obj = { default: module_3798 };
  let tmp3 = obj;
} else {
  tmp3 = module_3798;
}
module_3798 = tmp3;
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

export default function isTomorrow(arg0) {
  requiredArgs.default(1, arguments);
  return module_3831.default(arg0, module_3798.default(Date.now(), 1));
};
export default exports.default;