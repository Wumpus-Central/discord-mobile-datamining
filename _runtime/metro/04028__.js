// _runtime/metro/04028__.js
import 03844__ from "03844__.js";
import requiredArgs from "../03664_requiredArgs.js";

if (!module_3844) {
  let obj = { default: module_3844 };
  let tmp3 = obj;
} else {
  tmp3 = module_3844;
}
module_3844 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isToday(arg0) {
  requiredArgs.default(1, arguments);
  return module_3844.default(arg0, Date.now());
};
export default exports.default;