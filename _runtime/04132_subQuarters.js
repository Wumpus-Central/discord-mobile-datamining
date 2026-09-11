// _runtime/04132_subQuarters.js
import 03699__ from "metro/03699__.js";
import 03861__ from "metro/03861__.js";
import requiredArgs from "03696_requiredArgs.js";

if (!module_3699) {
  let obj = { default: module_3699 };
  let tmp3 = obj;
} else {
  tmp3 = module_3699;
}
module_3699 = tmp3;
if (!module_3861) {
  obj = { default: module_3861 };
  let tmp5 = obj;
} else {
  tmp5 = module_3861;
}
module_3861 = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subQuarters(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3861.default(arg0, -module_3699.default(arg1));
};
export default exports.default;