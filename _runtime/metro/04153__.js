// === Module 4153: ? ===

// Module 4153
import module_4009_mod from "module_4009" /* 4009 */;
import _typeof_mod from "module_3728" /* 3728 */;
import requiredArgs_mod from "requiredArgs" /* 3729 */;
import module_3732_mod from "module_3732" /* 3732 */;

let module_4009 = module_4009_mod;
if (!module_4009) {
  const obj = { default: module_4009 };
  let tmp3 = obj;
} else {
  tmp3 = module_4009;
}
module_4009 = tmp3;
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
let module_3732 = module_3732_mod;
if (!module_3732) {
  const obj4 = { default: module_3732 };
  let tmp9 = obj4;
} else {
  tmp9 = module_3732;
}
module_3732 = tmp9;

export default function setWeek(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_4009.default(defaultResult1, arg2) - module_3732.default(arg1);
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;