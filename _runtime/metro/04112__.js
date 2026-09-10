// _runtime/metro/04112__.js
import 03697__ from "03697__.js";
import _typeof from "03693__.js";
import 03841__ from "03841__.js";
import 03964__ from "03964__.js";
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
if (!module_3841) {
  obj = { default: module_3841 };
  let tmp7 = obj;
} else {
  tmp7 = module_3841;
}
module_3841 = tmp7;
if (!module_3964) {
  const obj1 = { default: module_3964 };
  let tmp9 = obj1;
} else {
  tmp9 = module_3964;
}
module_3964 = tmp9;
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
  return module_3841.default(defaultResult1, module_3697.default(arg1) - module_3964.default(defaultResult1));
};
export default exports.default;