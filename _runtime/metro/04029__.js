// _runtime/metro/04029__.js
import 03811__ from "03811__.js";
import 03844__ from "03844__.js";
import requiredArgs from "../03664_requiredArgs.js";

if (!module_3811) {
  let obj = { default: module_3811 };
  let tmp3 = obj;
} else {
  tmp3 = module_3811;
}
module_3811 = tmp3;
if (!module_3844) {
  obj = { default: module_3844 };
  let tmp5 = obj;
} else {
  tmp5 = module_3844;
}
module_3844 = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function isTomorrow(arg0) {
  requiredArgs.default(1, arguments);
  return module_3844.default(arg0, module_3811.default(Date.now(), 1));
};
export default exports.default;