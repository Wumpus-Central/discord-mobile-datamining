// _runtime/metro/04049__.js
import 04038__ from "04038__.js";
import requiredArgs from "../03694_requiredArgs.js";

if (!module_4038) {
  let obj = { default: module_4038 };
  let tmp3 = obj;
} else {
  tmp3 = module_4038;
}
module_4038 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisHour(arg0) {
  requiredArgs.default(1, arguments);
  return module_4038.default(Date.now(), arg0);
};
export default exports.default;