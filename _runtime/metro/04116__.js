// _runtime/metro/04116__.js
import 03697__ from "03697__.js";
import _typeof from "03693__.js";
import 04106__ from "04106__.js";
import requiredArgs from "../03694_requiredArgs.js";

if (!module_3697) {
  let obj = { default: module_3697 };
  let tmp3 = obj;
} else {
  tmp3 = module_3697;
}
module_3697 = tmp3;
if (!_typeof) {
  obj = { default: _typeof };
  let tmp5 = obj;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
if (!module_4106) {
  obj = { default: module_4106 };
  let tmp7 = obj;
} else {
  tmp7 = module_4106;
}
module_4106 = tmp7;
if (!requiredArgs) {
  const obj1 = { default: requiredArgs };
  let tmp9 = obj1;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setQuarter(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_3697.default(arg1) - (Math.floor(defaultResult1.getMonth() / 3) + 1);
  return module_4106.default(defaultResult1, defaultResult1.getMonth() + 3 * diff);
};
export default exports.default;