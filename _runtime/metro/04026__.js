// _runtime/metro/04026__.js
import 04018__ from "04018__.js";
import requiredArgs from "../03664_requiredArgs.js";

if (!module_4018) {
  let obj = { default: module_4018 };
  let tmp3 = obj;
} else {
  tmp3 = module_4018;
}
module_4018 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisYear(arg0) {
  requiredArgs.default(1, arguments);
  return module_4018.default(arg0, Date.now());
};
export default exports.default;