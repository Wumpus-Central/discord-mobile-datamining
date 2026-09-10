// _runtime/metro/03945__.js
import 03941__ from "03941__.js";
import requiredArgs from "../03694_requiredArgs.js";

if (!module_3941) {
  let obj = { default: module_3941 };
  let tmp3 = obj;
} else {
  tmp3 = module_3941;
}
module_3941 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function formatDistanceToNow(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return module_3941.default(arg0, Date.now(), arg1);
};
export default exports.default;