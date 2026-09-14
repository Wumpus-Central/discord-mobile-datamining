// _runtime/metro/04148__.js
import module_3729_mod from "03729__.js";
import _typeof_mod from "03725__.js";
import module_4138_mod from "04138__.js";
import requiredArgs_mod from "../03726_requiredArgs.js";

let module_3729 = module_3729_mod;
if (!module_3729) {
  const obj = { default: module_3729 };
  let tmp3 = obj;
} else {
  tmp3 = module_3729;
}
module_3729 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4138 = module_4138_mod;
if (!module_4138) {
  const obj3 = { default: module_4138 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4138;
}
module_4138 = tmp7;
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
  const diff = module_3729.default(arg1) - (Math.floor(defaultResult1.getMonth() / 3) + 1);
  return module_4138.default(defaultResult1, defaultResult1.getMonth() + 3 * diff);
};
export default exports.default;