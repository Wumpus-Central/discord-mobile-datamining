// _runtime/metro/04012__.js
import 03998__ from "03998__.js";
import requiredArgs from "../03651_requiredArgs.js";

if (!module_3998) {
  let obj = { default: module_3998 };
  let tmp3 = obj;
} else {
  tmp3 = module_3998;
}
module_3998 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisWeek(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return module_3998.default(arg0, Date.now(), arg1);
};
export default exports.default;