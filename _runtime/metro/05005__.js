// _runtime/metro/05005__.js
import module_4589_mod from "04589__.js";
import _typeof_mod from "04585__.js";
import module_4857_mod from "04857__.js";
import requiredArgs_mod from "../04586_requiredArgs.js";

let module_4589 = module_4589_mod;
if (!module_4589) {
  const obj = { default: module_4589 };
  let tmp3 = obj;
} else {
  tmp3 = module_4589;
}
module_4589 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4857 = module_4857_mod;
if (!module_4857) {
  const obj3 = { default: module_4857 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4857;
}
module_4857 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setISOWeek(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_4857.default(defaultResult1) - module_4589.default(arg1);
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;