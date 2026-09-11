// _runtime/04130_subHours.js
import 03849__ from "metro/03849__.js";
import requiredArgs from "03696_requiredArgs.js";
import 03699__ from "metro/03699__.js";

if (!module_3849) {
  let obj = { default: module_3849 };
  let tmp3 = obj;
} else {
  tmp3 = module_3849;
}
module_3849 = tmp3;
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

export default function subHours(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3849.default(arg0, -module_3699.default(arg1));
};
export default exports.default;