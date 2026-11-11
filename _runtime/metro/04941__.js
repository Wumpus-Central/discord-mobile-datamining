// _runtime/metro/04941__.js
import module_4526_mod from "04526__.js";
import _typeof_mod from "04522__.js";
import module_4670_mod from "04670__.js";
import module_4793_mod from "04793__.js";
import requiredArgs_mod from "../04523_requiredArgs.js";

let module_4526 = module_4526_mod;
if (!module_4526) {
  const obj = { default: module_4526 };
  let tmp3 = obj;
} else {
  tmp3 = module_4526;
}
module_4526 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4670 = module_4670_mod;
if (!module_4670) {
  const obj3 = { default: module_4670 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4670;
}
module_4670 = tmp7;
let module_4793 = module_4793_mod;
if (!module_4793) {
  const obj4 = { default: module_4793 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4793;
}
module_4793 = tmp9;
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
  return module_4670.default(defaultResult1, module_4526.default(arg1) - module_4793.default(defaultResult1));
};
export default exports.default;