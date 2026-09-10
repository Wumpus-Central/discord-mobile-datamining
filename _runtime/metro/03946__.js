// _runtime/metro/03946__.js
import 03944__ from "03944__.js";
import requiredArgs from "../03694_requiredArgs.js";

if (!module_3944) {
  let obj = { default: module_3944 };
  let tmp3 = obj;
} else {
  tmp3 = module_3944;
}
module_3944 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function formatDistanceToNowStrict(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return module_3944.default(arg0, Date.now(), arg1);
};
export default exports.default;