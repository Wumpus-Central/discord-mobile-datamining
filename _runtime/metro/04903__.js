// _runtime/metro/04903__.js
import module_4589_mod from "04589__.js";
import _typeof_mod from "04585__.js";
import module_4825_mod from "04825__.js";
import requiredArgs_mod from "../04586_requiredArgs.js";

let module_4589 = module_4589_mod;
if (!module_4589) {
  const obj = { default: module_4589 };
  let tmp3 = obj;
} else {
  tmp3 = module_4589;
}
module_4589 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4825 = module_4825_mod;
if (!module_4825) {
  const obj3 = { default: module_4825 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4825;
}
module_4825 = tmp7;
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
  const diff = module_4825.default(defaultResult1, arg2) - module_4589.default(arg1);
  defaultResult1.setUTCDate(defaultResult1.getUTCDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;