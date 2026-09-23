// _runtime/metro/04330__.js
import module_3915_mod from "03915__.js";
import _typeof_mod from "03911__.js";
import module_4059_mod from "04059__.js";
import module_4182_mod from "04182__.js";
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
let module_4059 = module_4059_mod;
if (!module_4059) {
  const obj3 = { default: module_4059 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4059;
}
module_4059 = tmp7;
let module_4182 = module_4182_mod;
if (!module_4182) {
  const obj4 = { default: module_4182 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4182;
}
module_4182 = tmp9;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj5 = { default: requiredArgs };
  let tmp11 = obj5;
} else {
  tmp11 = requiredArgs;
}
requiredArgs = tmp11;

export default function setISODay(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  return module_4059.default(defaultResult1, module_3915.default(arg1) - module_4182.default(defaultResult1));
};
export default exports.default;