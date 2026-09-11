// _runtime/04135_subYears.js
import 03699__ from "metro/03699__.js";
import 03864__ from "metro/03864__.js";
import requiredArgs from "03696_requiredArgs.js";

if (!module_3699) {
  let obj = { default: module_3699 };
  let tmp3 = obj;
} else {
  tmp3 = module_3699;
}
module_3699 = tmp3;
if (!module_3864) {
  obj = { default: module_3864 };
  let tmp5 = obj;
} else {
  tmp5 = module_3864;
}
module_3864 = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3864.default(arg0, -module_3699.default(arg1));
};
export default exports.default;