// _runtime/04131_subMinutes.js
import 03860__ from "metro/03860__.js";
import requiredArgs from "03696_requiredArgs.js";
import 03699__ from "metro/03699__.js";

if (!module_3860) {
  let obj = { default: module_3860 };
  let tmp3 = obj;
} else {
  tmp3 = module_3860;
}
module_3860 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
if (!module_3699) {
  obj = { default: module_3699 };
  let tmp7 = obj;
} else {
  tmp7 = module_3699;
}
module_3699 = tmp7;

export default function subMinutes(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3860.default(arg0, -module_3699.default(arg1));
};
export default exports.default;