// _runtime/metro/04574__.js
import module_4160_mod from "04160__.js";
import _typeof_mod from "04156__.js";
import requiredArgs_mod from "../04157_requiredArgs.js";

let module_4160 = module_4160_mod;
if (!module_4160) {
  const obj = { default: module_4160 };
  let tmp3 = obj;
} else {
  tmp3 = module_4160;
}
module_4160 = tmp3;
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

export default function setHours(module_4160, uTCMinutes) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(module_4160);
  defaultResult1.setHours(module_4160.default(uTCMinutes));
  return defaultResult1;
};
export default exports.default;