// _runtime/metro/04848__.js
import module_4704_mod from "04704__.js";
import _typeof_mod from "04423__.js";
import requiredArgs_mod from "../04424_requiredArgs.js";
import module_4427_mod from "04427__.js";

let module_4704 = module_4704_mod;
if (!module_4704) {
  const obj = { default: module_4704 };
  let tmp3 = obj;
} else {
  tmp3 = module_4704;
}
module_4704 = tmp3;
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
let module_4427 = module_4427_mod;
if (!module_4427) {
  const obj4 = { default: module_4427 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4427;
}
module_4427 = tmp9;

export default function setWeek(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_4704.default(defaultResult1, arg2) - module_4427.default(arg1);
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;