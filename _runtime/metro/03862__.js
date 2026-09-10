// _runtime/metro/03862__.js
import 03697__ from "03697__.js";
import 03842__ from "03842__.js";
import requiredArgs from "../03694_requiredArgs.js";

if (!module_3697) {
  let obj = { default: module_3697 };
  let tmp3 = obj;
} else {
  tmp3 = module_3697;
}
module_3697 = tmp3;
if (!module_3842) {
  obj = { default: module_3842 };
  let tmp5 = obj;
} else {
  tmp5 = module_3842;
}
module_3842 = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addYears(interval, arg1) {
  requiredArgs.default(2, arguments);
  return module_3842.default(interval, 12 * module_3697.default(arg1));
};
export default exports.default;