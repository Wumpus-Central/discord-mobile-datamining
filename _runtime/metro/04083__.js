// _runtime/metro/04083__.js
import 04075__ from "04075__.js";
import requiredArgs from "../03726_requiredArgs.js";

if (!module_4075) {
  let obj = { default: module_4075 };
  let tmp3 = obj;
} else {
  tmp3 = module_4075;
}
module_4075 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisMinute(arg0) {
  requiredArgs.default(1, arguments);
  return module_4075.default(Date.now(), arg0);
};
export default exports.default;