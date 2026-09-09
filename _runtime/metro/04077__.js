// _runtime/metro/04077__.js
import 03667__ from "03667__.js";
import _typeof from "03663__.js";
import requiredArgs from "../03664_requiredArgs.js";

if (!module_3667) {
  let obj = { default: module_3667 };
  let tmp3 = obj;
} else {
  tmp3 = module_3667;
}
module_3667 = tmp3;
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

export default function setDate(module_3667, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(module_3667);
  defaultResult1.setDate(module_3667.default(arg1));
  return defaultResult1;
};
export default exports.default;