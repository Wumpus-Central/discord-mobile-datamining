// _runtime/metro/04053__.js
import 04045__ from "04045__.js";
import requiredArgs from "../03696_requiredArgs.js";

if (!module_4045) {
  let obj = { default: module_4045 };
  let tmp3 = obj;
} else {
  tmp3 = module_4045;
}
module_4045 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisMinute(arg0) {
  requiredArgs.default(1, arguments);
  return module_4045.default(Date.now(), arg0);
};
export default exports.default;