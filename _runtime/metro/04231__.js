// _runtime/metro/04231__.js
import module_3917_mod from "03917__.js";
import _typeof_mod from "03913__.js";
import module_4153_mod from "04153__.js";
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
let module_4153 = module_4153_mod;
if (!module_4153) {
  const obj3 = { default: module_4153 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4153;
}
module_4153 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setUTCWeek(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_4153.default(defaultResult1, arg2) - module_3917.default(arg1);
  defaultResult1.setUTCDate(defaultResult1.getUTCDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;