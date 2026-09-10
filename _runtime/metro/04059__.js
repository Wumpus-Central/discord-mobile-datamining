// _runtime/metro/04059__.js
import 03841__ from "03841__.js";
import 03874__ from "03874__.js";
import requiredArgs from "../03694_requiredArgs.js";

if (!module_3841) {
  let obj = { default: module_3841 };
  let tmp3 = obj;
} else {
  tmp3 = module_3841;
}
module_3841 = tmp3;
if (!module_3874) {
  obj = { default: module_3874 };
  let tmp5 = obj;
} else {
  tmp5 = module_3874;
}
module_3874 = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function isTomorrow(arg0) {
  requiredArgs.default(1, arguments);
  return module_3874.default(arg0, module_3841.default(Date.now(), 1));
};
export default exports.default;