// _runtime/metro/04265__.js
import module_3951_mod from "03951__.js";
import _typeof_mod from "03947__.js";
import module_4187_mod from "04187__.js";
import requiredArgs_mod from "../03948_requiredArgs.js";

let module_3951 = module_3951_mod;
if (!module_3951) {
  const obj = { default: module_3951 };
  let tmp3 = obj;
} else {
  tmp3 = module_3951;
}
module_3951 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4187 = module_4187_mod;
if (!module_4187) {
  const obj3 = { default: module_4187 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4187;
}
module_4187 = tmp7;
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
  const diff = module_4187.default(defaultResult1, arg2) - module_3951.default(arg1);
  defaultResult1.setUTCDate(defaultResult1.getUTCDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;