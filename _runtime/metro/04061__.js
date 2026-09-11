// _runtime/metro/04061__.js
import 03843__ from "03843__.js";
import 03876__ from "03876__.js";
import requiredArgs from "../03696_requiredArgs.js";

if (!module_3843) {
  let obj = { default: module_3843 };
  let tmp3 = obj;
} else {
  tmp3 = module_3843;
}
module_3843 = tmp3;
if (!module_3876) {
  obj = { default: module_3876 };
  let tmp5 = obj;
} else {
  tmp5 = module_3876;
}
module_3876 = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function isTomorrow(arg0) {
  requiredArgs.default(1, arguments);
  return module_3876.default(arg0, module_3843.default(Date.now(), 1));
};
export default exports.default;