// === Module 5014: ? ===

// Module 5014
import module_4870_mod from "module_4870" /* 4870 */;
import _typeof_mod from "module_4589" /* 4589 */;
import requiredArgs_mod from "requiredArgs" /* 4590 */;
import module_4593_mod from "module_4593" /* 4593 */;

let module_4870 = module_4870_mod;
if (!module_4870) {
  const obj = { default: module_4870 };
  let tmp3 = obj;
} else {
  tmp3 = module_4870;
}
module_4870 = tmp3;
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
let module_4593 = module_4593_mod;
if (!module_4593) {
  const obj4 = { default: module_4593 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4593;
}
module_4593 = tmp9;

export default function setWeek(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_4870.default(defaultResult1, arg2) - module_4593.default(arg1);
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;