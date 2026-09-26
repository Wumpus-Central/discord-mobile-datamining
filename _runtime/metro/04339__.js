// _runtime/metro/04339__.js
import module_3922_mod from "03922__.js";
import _typeof_mod from "03918__.js";
import requiredArgs_mod from "../03919_requiredArgs.js";

let module_3922 = module_3922_mod;
if (!module_3922) {
  const obj = { default: module_3922 };
  let tmp3 = obj;
} else {
  tmp3 = module_3922;
}
module_3922 = tmp3;
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

export default function setMilliseconds(module_3922, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(module_3922);
  defaultResult1.setMilliseconds(module_3922.default(arg1));
  return defaultResult1;
};
export default exports.default;