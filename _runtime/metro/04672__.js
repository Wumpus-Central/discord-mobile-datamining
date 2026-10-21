// _runtime/metro/04672__.js
import module_4256_mod from "04256__.js";
import _typeof_mod from "04252__.js";
import module_4524_mod from "04524__.js";
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
let module_4524 = module_4524_mod;
if (!module_4524) {
  const obj3 = { default: module_4524 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4524;
}
module_4524 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setISOWeek(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_4524.default(defaultResult1) - module_4256.default(arg1);
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;