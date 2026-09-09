// _runtime/metro/04033__.js
import 03844__ from "03844__.js";
import subDays from "../04034_subDays.js";
import requiredArgs from "../03664_requiredArgs.js";

if (!module_3844) {
  let obj = { default: module_3844 };
  let tmp3 = obj;
} else {
  tmp3 = module_3844;
}
module_3844 = tmp3;
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
  return module_3844.default(arg0, subDays.default(Date.now(), 1));
};
export default exports.default;