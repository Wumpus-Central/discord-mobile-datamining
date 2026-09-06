// _runtime/metro/04011__.js
import 04003__ from "04003__.js";
import requiredArgs from "../03651_requiredArgs.js";

if (!module_4003) {
  let obj = { default: module_4003 };
  let tmp3 = obj;
} else {
  tmp3 = module_4003;
}
module_4003 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisSecond(arg0) {
  requiredArgs.default(1, arguments);
  return module_4003.default(Date.now(), arg0);
};
export default exports.default;