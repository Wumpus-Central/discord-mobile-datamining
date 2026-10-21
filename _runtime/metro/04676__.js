// _runtime/metro/04676__.js
import module_4256_mod from "04256__.js";
import _typeof_mod from "04252__.js";
import requiredArgs_mod from "../04253_requiredArgs.js";

let module_4256 = module_4256_mod;
if (!module_4256) {
  const obj = { default: module_4256 };
  let tmp3 = obj;
} else {
  tmp3 = module_4256;
}
module_4256 = tmp3;
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

export default function setSeconds(module_4256, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(module_4256);
  defaultResult1.setSeconds(module_4256.default(arg1));
  return defaultResult1;
};
export default exports.default;