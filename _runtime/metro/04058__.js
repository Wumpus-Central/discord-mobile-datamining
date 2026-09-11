// _runtime/metro/04058__.js
import 04050__ from "04050__.js";
import requiredArgs from "../03696_requiredArgs.js";

if (!module_4050) {
  let obj = { default: module_4050 };
  let tmp3 = obj;
} else {
  tmp3 = module_4050;
}
module_4050 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisYear(arg0) {
  requiredArgs.default(1, arguments);
  return module_4050.default(arg0, Date.now());
};
export default exports.default;