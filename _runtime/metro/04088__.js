// _runtime/metro/04088__.js
import 04080__ from "04080__.js";
import requiredArgs from "../03726_requiredArgs.js";

if (!module_4080) {
  let obj = { default: module_4080 };
  let tmp3 = obj;
} else {
  tmp3 = module_4080;
}
module_4080 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisYear(arg0) {
  requiredArgs.default(1, arguments);
  return module_4080.default(arg0, Date.now());
};
export default exports.default;