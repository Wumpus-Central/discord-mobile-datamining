// _runtime/metro/04118__.js
import 03974__ from "03974__.js";
import _typeof from "03693__.js";
import requiredArgs from "../03694_requiredArgs.js";
import 03697__ from "03697__.js";

if (!module_3974) {
  let obj = { default: module_3974 };
  let tmp3 = obj;
} else {
  tmp3 = module_3974;
}
module_3974 = tmp3;
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
if (!module_3697) {
  const obj1 = { default: module_3697 };
  let tmp9 = obj1;
} else {
  tmp9 = module_3697;
}
module_3697 = tmp9;

export default function setWeek(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_3974.default(defaultResult1, arg2) - module_3697.default(arg1);
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;