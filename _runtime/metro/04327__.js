// _runtime/metro/04327__.js
import module_3917_mod from "03917__.js";
import _typeof_mod from "03913__.js";
import requiredArgs_mod from "../03914_requiredArgs.js";

let module_3917 = module_3917_mod;
if (!module_3917) {
  const obj = { default: module_3917 };
  let tmp3 = obj;
} else {
  tmp3 = module_3917;
}
module_3917 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function setDate(module_3917, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(module_3917);
  defaultResult1.setDate(module_3917.default(arg1));
  return defaultResult1;
};
export default exports.default;