// _runtime/metro/04907__.js
import module_4593_mod from "04593__.js";
import _typeof_mod from "04589__.js";
import module_4829_mod from "04829__.js";
import requiredArgs_mod from "../04590_requiredArgs.js";

let module_4593 = module_4593_mod;
if (!module_4593) {
  const obj = { default: module_4593 };
  let tmp3 = obj;
} else {
  tmp3 = module_4593;
}
module_4593 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4829 = module_4829_mod;
if (!module_4829) {
  const obj3 = { default: module_4829 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4829;
}
module_4829 = tmp7;
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
  const diff = module_4829.default(defaultResult1, arg2) - module_4593.default(arg1);
  defaultResult1.setUTCDate(defaultResult1.getUTCDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;