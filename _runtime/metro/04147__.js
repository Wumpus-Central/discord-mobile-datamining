// _runtime/metro/04147__.js
import module_3730_mod from "03730__.js";
import _typeof_mod from "03726__.js";
import requiredArgs_mod from "../03727_requiredArgs.js";

let module_3730 = module_3730_mod;
if (!module_3730) {
  const obj = { default: module_3730 };
  let tmp3 = obj;
} else {
  tmp3 = module_3730;
}
module_3730 = tmp3;
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

export default function setMilliseconds(module_3730, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(module_3730);
  defaultResult1.setMilliseconds(module_3730.default(arg1));
  return defaultResult1;
};
export default exports.default;