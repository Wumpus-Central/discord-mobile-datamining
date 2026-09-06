// _runtime/metro/04007__.js
import 03997__ from "03997__.js";
import requiredArgs from "../03651_requiredArgs.js";

if (!module_3997) {
  let obj = { default: module_3997 };
  let tmp3 = obj;
} else {
  tmp3 = module_3997;
}
module_3997 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisISOWeek(arg0) {
  requiredArgs.default(1, arguments);
  return module_3997.default(arg0, Date.now());
};
export default exports.default;