// _runtime/metro/03861__.js
import 03697__ from "03697__.js";
import 03841__ from "03841__.js";
import requiredArgs from "../03694_requiredArgs.js";

if (!module_3697) {
  let obj = { default: module_3697 };
  let tmp3 = obj;
} else {
  tmp3 = module_3697;
}
module_3697 = tmp3;
if (!module_3841) {
  obj = { default: module_3841 };
  let tmp5 = obj;
} else {
  tmp5 = module_3841;
}
module_3841 = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addWeeks(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3841.default(arg0, 7 * module_3697.default(arg1));
};
export default exports.default;