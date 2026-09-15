// === Module 4148: ? ===

// Module 4148
import module_3732_mod from "module_3732" /* 3732 */;
import _typeof_mod from "module_3728" /* 3728 */;
import module_4000_mod from "module_4000" /* 4000 */;
import requiredArgs_mod from "requiredArgs" /* 3729 */;

let module_3732 = module_3732_mod;
if (!module_3732) {
  const obj = { default: module_3732 };
  let tmp3 = obj;
} else {
  tmp3 = module_3732;
}
module_3732 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4000 = module_4000_mod;
if (!module_4000) {
  const obj3 = { default: module_4000 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4000;
}
module_4000 = tmp7;
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
  const diff = module_4000.default(defaultResult1) - module_3732.default(arg1);
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;