// _runtime/metro/03902__.js
import 03898__ from "03898__.js";
import requiredArgs from "../03651_requiredArgs.js";

if (!module_3898) {
  let obj = { default: module_3898 };
  let tmp3 = obj;
} else {
  tmp3 = module_3898;
}
module_3898 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function formatDistanceToNow(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return module_3898.default(arg0, Date.now(), arg1);
};
export default exports.default;