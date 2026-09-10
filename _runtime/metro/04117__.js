// _runtime/metro/04117__.js
import 03697__ from "03697__.js";
import _typeof from "03693__.js";
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
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function setSeconds(module_3697, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(module_3697);
  defaultResult1.setSeconds(module_3697.default(arg1));
  return defaultResult1;
};
export default exports.default;