// _runtime/metro/03832__.js
import 03667__ from "03667__.js";
import 03812__ from "03812__.js";
import requiredArgs from "../03664_requiredArgs.js";

if (!module_3667) {
  let obj = { default: module_3667 };
  let tmp3 = obj;
} else {
  tmp3 = module_3667;
}
module_3667 = tmp3;
if (!module_3812) {
  obj = { default: module_3812 };
  let tmp5 = obj;
} else {
  tmp5 = module_3812;
}
module_3812 = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addYears(interval, arg1) {
  requiredArgs.default(2, arguments);
  return module_3812.default(interval, 12 * module_3667.default(arg1));
};
export default exports.default;