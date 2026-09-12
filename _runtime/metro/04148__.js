// _runtime/metro/04148__.js
import 03729__ from "03729__.js";
import _typeof from "03725__.js";
import 04138__ from "04138__.js";
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
if (!module_4138) {
  obj = { default: module_4138 };
  let tmp7 = obj;
} else {
  tmp7 = module_4138;
}
module_4138 = tmp7;
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
  const diff = module_3729.default(arg1) - (Math.floor(defaultResult1.getMonth() / 3) + 1);
  return module_4138.default(defaultResult1, defaultResult1.getMonth() + 3 * diff);
};
export default exports.default;