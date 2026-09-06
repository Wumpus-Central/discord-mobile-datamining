// _runtime/metro/04006__.js
import 03995__ from "03995__.js";
import requiredArgs from "../03651_requiredArgs.js";

if (!module_3995) {
  let obj = { default: module_3995 };
  let tmp3 = obj;
} else {
  tmp3 = module_3995;
}
module_3995 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisHour(arg0) {
  requiredArgs.default(1, arguments);
  return module_3995.default(Date.now(), arg0);
};
export default exports.default;