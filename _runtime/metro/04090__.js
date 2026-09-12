// _runtime/metro/04090__.js
import 03906__ from "03906__.js";
import requiredArgs from "../03726_requiredArgs.js";

if (!module_3906) {
  let obj = { default: module_3906 };
  let tmp3 = obj;
} else {
  tmp3 = module_3906;
}
module_3906 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isToday(arg0) {
  requiredArgs.default(1, arguments);
  return module_3906.default(arg0, Date.now());
};
export default exports.default;