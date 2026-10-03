// _runtime/metro/04377__.js
import module_3962_mod from "03962__.js";
import _typeof_mod from "03958__.js";
import module_4106_mod from "04106__.js";
import module_4229_mod from "04229__.js";
import requiredArgs_mod from "../03959_requiredArgs.js";

let module_3962 = module_3962_mod;
if (!module_3962) {
  const obj = { default: module_3962 };
  let tmp3 = obj;
} else {
  tmp3 = module_3962;
}
module_3962 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4106 = module_4106_mod;
if (!module_4106) {
  const obj3 = { default: module_4106 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4106;
}
module_4106 = tmp7;
let module_4229 = module_4229_mod;
if (!module_4229) {
  const obj4 = { default: module_4229 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4229;
}
module_4229 = tmp9;
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
  return module_4106.default(defaultResult1, module_3962.default(arg1) - module_4229.default(defaultResult1));
};
export default exports.default;