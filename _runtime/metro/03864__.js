// _runtime/metro/03864__.js
import 03699__ from "03699__.js";
import 03844__ from "03844__.js";
import requiredArgs from "../03696_requiredArgs.js";

if (!module_3699) {
  let obj = { default: module_3699 };
  let tmp3 = obj;
} else {
  tmp3 = module_3699;
}
module_3699 = tmp3;
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

export default function addYears(interval, arg1) {
  requiredArgs.default(2, arguments);
  return module_3844.default(interval, 12 * module_3699.default(arg1));
};
export default exports.default;