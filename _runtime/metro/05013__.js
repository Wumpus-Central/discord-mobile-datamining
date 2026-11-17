// _runtime/metro/05013__.js
import module_4593_mod from "04593__.js";
import _typeof_mod from "04589__.js";
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
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function setSeconds(module_4593, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(module_4593);
  defaultResult1.setSeconds(module_4593.default(arg1));
  return defaultResult1;
};
export default exports.default;