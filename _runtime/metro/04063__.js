// _runtime/metro/04063__.js
import 03874__ from "03874__.js";
import subDays from "../04064_subDays.js";
import requiredArgs from "../03694_requiredArgs.js";

if (!module_3874) {
  let obj = { default: module_3874 };
  let tmp3 = obj;
} else {
  tmp3 = module_3874;
}
module_3874 = tmp3;
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
  return module_3874.default(arg0, subDays.default(Date.now(), 1));
};
export default exports.default;