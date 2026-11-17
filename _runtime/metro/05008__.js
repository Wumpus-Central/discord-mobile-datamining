// _runtime/metro/05008__.js
import module_4593_mod from "04593__.js";
import _typeof_mod from "04589__.js";
import module_4737_mod from "04737__.js";
import module_4860_mod from "04860__.js";
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
let module_4737 = module_4737_mod;
if (!module_4737) {
  const obj3 = { default: module_4737 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4737;
}
module_4737 = tmp7;
let module_4860 = module_4860_mod;
if (!module_4860) {
  const obj4 = { default: module_4860 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4860;
}
module_4860 = tmp9;
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
  return module_4737.default(defaultResult1, module_4593.default(arg1) - module_4860.default(defaultResult1));
};
export default exports.default;