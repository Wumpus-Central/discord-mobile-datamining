// _runtime/metro/03863__.js
import 03699__ from "03699__.js";
import 03843__ from "03843__.js";
import requiredArgs from "../03696_requiredArgs.js";

if (!module_3699) {
  let obj = { default: module_3699 };
  let tmp3 = obj;
} else {
  tmp3 = module_3699;
}
module_3699 = tmp3;
if (!module_3843) {
  obj = { default: module_3843 };
  let tmp5 = obj;
} else {
  tmp5 = module_3843;
}
module_3843 = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addWeeks(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3843.default(arg0, 7 * module_3699.default(arg1));
};
export default exports.default;