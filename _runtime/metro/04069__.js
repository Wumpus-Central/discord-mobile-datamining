// _runtime/metro/04069__.js
import 03654__ from "03654__.js";
import _typeof from "03650__.js";
import 03798__ from "03798__.js";
import 03921__ from "03921__.js";
import requiredArgs from "../03651_requiredArgs.js";

if (!module_3654) {
  let obj = { default: module_3654 };
  let tmp3 = obj;
} else {
  tmp3 = module_3654;
}
module_3654 = tmp3;
if (!_typeof) {
  obj = { default: _typeof };
  let tmp5 = obj;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
if (!module_3798) {
  obj = { default: module_3798 };
  let tmp7 = obj;
} else {
  tmp7 = module_3798;
}
module_3798 = tmp7;
if (!module_3921) {
  const obj1 = { default: module_3921 };
  let tmp9 = obj1;
} else {
  tmp9 = module_3921;
}
module_3921 = tmp9;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp11 = obj2;
} else {
  tmp11 = requiredArgs;
}
requiredArgs = tmp11;

export default function setISODay(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  return module_3798.default(defaultResult1, module_3654.default(arg1) - module_3921.default(defaultResult1));
};
export default exports.default;