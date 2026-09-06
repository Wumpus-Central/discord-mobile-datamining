// _runtime/metro/04008__.js
import 04000__ from "04000__.js";
import requiredArgs from "../03651_requiredArgs.js";

if (!module_4000) {
  let obj = { default: module_4000 };
  let tmp3 = obj;
} else {
  tmp3 = module_4000;
}
module_4000 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisMinute(arg0) {
  requiredArgs.default(1, arguments);
  return module_4000.default(Date.now(), arg0);
};
export default exports.default;