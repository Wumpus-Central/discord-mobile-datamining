// _runtime/metro/04343__.js
import module_4199_mod from "04199__.js";
import _typeof_mod from "03918__.js";
import requiredArgs_mod from "../03919_requiredArgs.js";
import module_3922_mod from "03922__.js";

let module_4199 = module_4199_mod;
if (!module_4199) {
  const obj = { default: module_4199 };
  let tmp3 = obj;
} else {
  tmp3 = module_4199;
}
module_4199 = tmp3;
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
let module_3922 = module_3922_mod;
if (!module_3922) {
  const obj4 = { default: module_3922 };
  let tmp9 = obj4;
} else {
  tmp9 = module_3922;
}
module_3922 = tmp9;

export default function setWeek(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_4199.default(defaultResult1, arg2) - module_3922.default(arg1);
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;