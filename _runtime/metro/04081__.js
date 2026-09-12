// _runtime/metro/04081__.js
import 04070__ from "04070__.js";
import requiredArgs from "../03726_requiredArgs.js";

if (!module_4070) {
  let obj = { default: module_4070 };
  let tmp3 = obj;
} else {
  tmp3 = module_4070;
}
module_4070 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisHour(arg0) {
  requiredArgs.default(1, arguments);
  return module_4070.default(Date.now(), arg0);
};
export default exports.default;