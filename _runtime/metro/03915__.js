// _runtime/metro/03915__.js
import 03911__ from "03911__.js";
import requiredArgs from "../03664_requiredArgs.js";

if (!module_3911) {
  let obj = { default: module_3911 };
  let tmp3 = obj;
} else {
  tmp3 = module_3911;
}
module_3911 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function formatDistanceToNow(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return module_3911.default(arg0, Date.now(), arg1);
};
export default exports.default;