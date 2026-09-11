// _runtime/metro/04114__.js
import 03699__ from "03699__.js";
import _typeof from "03695__.js";
import 03843__ from "03843__.js";
import 03966__ from "03966__.js";
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
if (!module_3843) {
  obj = { default: module_3843 };
  let tmp7 = obj;
} else {
  tmp7 = module_3843;
}
module_3843 = tmp7;
if (!module_3966) {
  const obj1 = { default: module_3966 };
  let tmp9 = obj1;
} else {
  tmp9 = module_3966;
}
module_3966 = tmp9;
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
  return module_3843.default(defaultResult1, module_3699.default(arg1) - module_3966.default(defaultResult1));
};
export default exports.default;