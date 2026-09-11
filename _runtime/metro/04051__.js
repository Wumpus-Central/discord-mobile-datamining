// _runtime/metro/04051__.js
import 04040__ from "04040__.js";
import requiredArgs from "../03696_requiredArgs.js";

if (!module_4040) {
  let obj = { default: module_4040 };
  let tmp3 = obj;
} else {
  tmp3 = module_4040;
}
module_4040 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisHour(arg0) {
  requiredArgs.default(1, arguments);
  return module_4040.default(Date.now(), arg0);
};
export default exports.default;