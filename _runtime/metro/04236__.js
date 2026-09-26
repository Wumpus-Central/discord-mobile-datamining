// _runtime/metro/04236__.js
import module_3922_mod from "03922__.js";
import _typeof_mod from "03918__.js";
import module_4158_mod from "04158__.js";
import requiredArgs_mod from "../03919_requiredArgs.js";

let module_3922 = module_3922_mod;
if (!module_3922) {
  const obj = { default: module_3922 };
  let tmp3 = obj;
} else {
  tmp3 = module_3922;
}
module_3922 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4158 = module_4158_mod;
if (!module_4158) {
  const obj3 = { default: module_4158 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4158;
}
module_4158 = tmp7;
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
  const diff = module_4158.default(defaultResult1, arg2) - module_3922.default(arg1);
  defaultResult1.setUTCDate(defaultResult1.getUTCDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;