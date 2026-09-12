// _runtime/metro/04084__.js
import 04076__ from "04076__.js";
import requiredArgs from "../03726_requiredArgs.js";

if (!module_4076) {
  let obj = { default: module_4076 };
  let tmp3 = obj;
} else {
  tmp3 = module_4076;
}
module_4076 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisMonth(arg0) {
  requiredArgs.default(1, arguments);
  return module_4076.default(Date.now(), arg0);
};
export default exports.default;