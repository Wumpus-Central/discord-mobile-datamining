// _runtime/metro/04149__.js
import module_3730_mod from "03730__.js";
import _typeof_mod from "03726__.js";
import module_4139_mod from "04139__.js";
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
let module_4139 = module_4139_mod;
if (!module_4139) {
  const obj3 = { default: module_4139 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4139;
}
module_4139 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setQuarter(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_3730.default(arg1) - (Math.floor(defaultResult1.getMonth() / 3) + 1);
  return module_4139.default(defaultResult1, defaultResult1.getMonth() + 3 * diff);
};
export default exports.default;