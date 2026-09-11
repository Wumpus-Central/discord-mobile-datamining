// _runtime/metro/04118__.js
import 03699__ from "03699__.js";
import _typeof from "03695__.js";
import 04108__ from "04108__.js";
import requiredArgs from "../03696_requiredArgs.js";

if (!module_3699) {
  let obj = { default: module_3699 };
  let tmp3 = obj;
} else {
  tmp3 = module_3699;
}
module_3699 = tmp3;
if (!_typeof) {
  obj = { default: _typeof };
  let tmp5 = obj;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
if (!module_4108) {
  obj = { default: module_4108 };
  let tmp7 = obj;
} else {
  tmp7 = module_4108;
}
module_4108 = tmp7;
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
  const diff = module_3699.default(arg1) - (Math.floor(defaultResult1.getMonth() / 3) + 1);
  return module_4108.default(defaultResult1, defaultResult1.getMonth() + 3 * diff);
};
export default exports.default;