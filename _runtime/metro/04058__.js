// _runtime/metro/04058__.js
import 03874__ from "03874__.js";
import requiredArgs from "../03694_requiredArgs.js";

if (!module_3874) {
  let obj = { default: module_3874 };
  let tmp3 = obj;
} else {
  tmp3 = module_3874;
}
module_3874 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isToday(arg0) {
  requiredArgs.default(1, arguments);
  return module_3874.default(arg0, Date.now());
};
export default exports.default;