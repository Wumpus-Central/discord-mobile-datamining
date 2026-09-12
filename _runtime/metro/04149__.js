// _runtime/metro/04149__.js
import 03729__ from "03729__.js";
import _typeof from "03725__.js";
import requiredArgs from "../03726_requiredArgs.js";

if (!module_3729) {
  let obj = { default: module_3729 };
  let tmp3 = obj;
} else {
  tmp3 = module_3729;
}
module_3729 = tmp3;
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

export default function setSeconds(module_3729, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(module_3729);
  defaultResult1.setSeconds(module_3729.default(arg1));
  return defaultResult1;
};
export default exports.default;