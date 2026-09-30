// _runtime/metro/04366__.js
import module_3952_mod from "03952__.js";
import _typeof_mod from "03948__.js";
import requiredArgs_mod from "../03949_requiredArgs.js";

let module_3952 = module_3952_mod;
if (!module_3952) {
  const obj = { default: module_3952 };
  let tmp3 = obj;
} else {
  tmp3 = module_3952;
}
module_3952 = tmp3;
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

export default function setHours(module_3952, uTCMinutes) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(module_3952);
  defaultResult1.setHours(module_3952.default(uTCMinutes));
  return defaultResult1;
};
export default exports.default;