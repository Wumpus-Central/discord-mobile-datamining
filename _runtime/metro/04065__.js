// _runtime/metro/04065__.js
import 03876__ from "03876__.js";
import subDays from "../04066_subDays.js";
import requiredArgs from "../03696_requiredArgs.js";

if (!module_3876) {
  let obj = { default: module_3876 };
  let tmp3 = obj;
} else {
  tmp3 = module_3876;
}
module_3876 = tmp3;
if (!subDays) {
  obj = { default: subDays };
  let tmp5 = obj;
} else {
  tmp5 = subDays;
}
subDays = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function isYesterday(arg0) {
  requiredArgs.default(1, arguments);
  return module_3876.default(arg0, subDays.default(Date.now(), 1));
};
export default exports.default;