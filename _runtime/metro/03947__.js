// _runtime/metro/03947__.js
import 03943__ from "03943__.js";
import requiredArgs from "../03696_requiredArgs.js";

if (!module_3943) {
  let obj = { default: module_3943 };
  let tmp3 = obj;
} else {
  tmp3 = module_3943;
}
module_3943 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function formatDistanceToNow(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return module_3943.default(arg0, Date.now(), arg1);
};
export default exports.default;