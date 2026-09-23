// _runtime/metro/04334__.js
import module_3915_mod from "03915__.js";
import _typeof_mod from "03911__.js";
import module_4324_mod from "04324__.js";
import requiredArgs_mod from "../03912_requiredArgs.js";

let module_3915 = module_3915_mod;
if (!module_3915) {
  const obj = { default: module_3915 };
  let tmp3 = obj;
} else {
  tmp3 = module_3915;
}
module_3915 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4324 = module_4324_mod;
if (!module_4324) {
  const obj3 = { default: module_4324 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4324;
}
module_4324 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setQuarter(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_3915.default(arg1) - (Math.floor(defaultResult1.getMonth() / 3) + 1);
  return module_4324.default(defaultResult1, defaultResult1.getMonth() + 3 * diff);
};
export default exports.default;