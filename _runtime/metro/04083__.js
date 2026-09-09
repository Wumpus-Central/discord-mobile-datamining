// _runtime/metro/04083__.js
import 03667__ from "03667__.js";
import _typeof from "03663__.js";
import 03935__ from "03935__.js";
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
if (!module_3935) {
  obj = { default: module_3935 };
  let tmp7 = obj;
} else {
  tmp7 = module_3935;
}
module_3935 = tmp7;
if (!requiredArgs) {
  const obj1 = { default: requiredArgs };
  let tmp9 = obj1;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setISOWeek(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_3935.default(defaultResult1) - module_3667.default(arg1);
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;