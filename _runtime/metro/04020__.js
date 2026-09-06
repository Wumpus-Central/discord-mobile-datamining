// _runtime/metro/04020__.js
import 03831__ from "03831__.js";
import subDays from "../04021_subDays.js";
import requiredArgs from "../03651_requiredArgs.js";

if (!module_3831) {
  let obj = { default: module_3831 };
  let tmp3 = obj;
} else {
  tmp3 = module_3831;
}
module_3831 = tmp3;
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
  return module_3831.default(arg0, subDays.default(Date.now(), 1));
};
export default exports.default;