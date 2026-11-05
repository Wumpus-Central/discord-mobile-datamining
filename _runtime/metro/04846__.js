// _runtime/metro/04846__.js
import module_4427_mod from "04427__.js";
import _typeof_mod from "04423__.js";
import module_4836_mod from "04836__.js";
import requiredArgs_mod from "../04424_requiredArgs.js";

let module_4427 = module_4427_mod;
if (!module_4427) {
  const obj = { default: module_4427 };
  let tmp3 = obj;
} else {
  tmp3 = module_4427;
}
module_4427 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4836 = module_4836_mod;
if (!module_4836) {
  const obj3 = { default: module_4836 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4836;
}
module_4836 = tmp7;
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
  const diff = module_4427.default(arg1) - (Math.floor(defaultResult1.getMonth() / 3) + 1);
  return module_4836.default(defaultResult1, defaultResult1.getMonth() + 3 * diff);
};
export default exports.default;