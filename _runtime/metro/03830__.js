// _runtime/metro/03830__.js
import 03667__ from "03667__.js";
import 03818__ from "03818__.js";
import requiredArgs from "../03664_requiredArgs.js";

if (!module_3667) {
  let obj = { default: module_3667 };
  let tmp3 = obj;
} else {
  tmp3 = module_3667;
}
module_3667 = tmp3;
if (!module_3818) {
  obj = { default: module_3818 };
  let tmp5 = obj;
} else {
  tmp5 = module_3818;
}
module_3818 = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addSeconds(interval, arg1) {
  requiredArgs.default(2, arguments);
  return module_3818.default(interval, 1000 * module_3667.default(arg1));
};
export default exports.default;