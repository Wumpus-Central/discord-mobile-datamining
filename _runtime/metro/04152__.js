// _runtime/metro/04152__.js
import module_3732_mod from "03732__.js";
import _typeof_mod from "03728__.js";
import requiredArgs_mod from "../03729_requiredArgs.js";

let module_3732 = module_3732_mod;
if (!module_3732) {
  const obj = { default: module_3732 };
  let tmp3 = obj;
} else {
  tmp3 = module_3732;
}
module_3732 = tmp3;
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

export default function setSeconds(module_3732, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(module_3732);
  defaultResult1.setSeconds(module_3732.default(arg1));
  return defaultResult1;
};
export default exports.default;