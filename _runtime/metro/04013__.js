// _runtime/metro/04013__.js
import 04005__ from "04005__.js";
import requiredArgs from "../03651_requiredArgs.js";

if (!module_4005) {
  let obj = { default: module_4005 };
  let tmp3 = obj;
} else {
  tmp3 = module_4005;
}
module_4005 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisYear(arg0) {
  requiredArgs.default(1, arguments);
  return module_4005.default(arg0, Date.now());
};
export default exports.default;