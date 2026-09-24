// _runtime/metro/04338__.js
import module_4194_mod from "04194__.js";
import _typeof_mod from "03913__.js";
import requiredArgs_mod from "../03914_requiredArgs.js";
import module_3917_mod from "03917__.js";

let module_4194 = module_4194_mod;
if (!module_4194) {
  const obj = { default: module_4194 };
  let tmp3 = obj;
} else {
  tmp3 = module_4194;
}
module_4194 = tmp3;
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
let module_3917 = module_3917_mod;
if (!module_3917) {
  const obj4 = { default: module_3917 };
  let tmp9 = obj4;
} else {
  tmp9 = module_3917;
}
module_3917 = tmp9;

export default function setWeek(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_4194.default(defaultResult1, arg2) - module_3917.default(arg1);
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;