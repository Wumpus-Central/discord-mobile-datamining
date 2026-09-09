// _runtime/metro/04088__.js
import 03944__ from "03944__.js";
import _typeof from "03663__.js";
import requiredArgs from "../03664_requiredArgs.js";
import 03667__ from "03667__.js";

if (!module_3944) {
  let obj = { default: module_3944 };
  let tmp3 = obj;
} else {
  tmp3 = module_3944;
}
module_3944 = tmp3;
if (!_typeof) {
  obj = { default: _typeof };
  let tmp5 = obj;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;
if (!module_3667) {
  const obj1 = { default: module_3667 };
  let tmp9 = obj1;
} else {
  tmp9 = module_3667;
}
module_3667 = tmp9;

export default function setWeek(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_3944.default(defaultResult1, arg2) - module_3667.default(arg1);
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;