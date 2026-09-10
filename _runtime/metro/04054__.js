// _runtime/metro/04054__.js
import 04046__ from "04046__.js";
import requiredArgs from "../03694_requiredArgs.js";

if (!module_4046) {
  let obj = { default: module_4046 };
  let tmp3 = obj;
} else {
  tmp3 = module_4046;
}
module_4046 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisSecond(arg0) {
  requiredArgs.default(1, arguments);
  return module_4046.default(Date.now(), arg0);
};
export default exports.default;