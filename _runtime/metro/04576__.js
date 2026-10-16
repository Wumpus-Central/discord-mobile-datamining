// _runtime/metro/04576__.js
import module_4262_mod from "04262__.js";
import _typeof_mod from "04258__.js";
import module_4498_mod from "04498__.js";
import requiredArgs_mod from "../04259_requiredArgs.js";

let module_4262 = module_4262_mod;
if (!module_4262) {
  const obj = { default: module_4262 };
  let tmp3 = obj;
} else {
  tmp3 = module_4262;
}
module_4262 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4498 = module_4498_mod;
if (!module_4498) {
  const obj3 = { default: module_4498 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4498;
}
module_4498 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setUTCWeek(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_4498.default(defaultResult1, arg2) - module_4262.default(arg1);
  defaultResult1.setUTCDate(defaultResult1.getUTCDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;