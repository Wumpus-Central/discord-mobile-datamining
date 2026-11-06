// === Module 4875: ? ===

// Module 4875
import module_4731_mod from "module_4731" /* 4731 */;
import _typeof_mod from "module_4450" /* 4450 */;
import requiredArgs_mod from "requiredArgs" /* 4451 */;
import module_4454_mod from "module_4454" /* 4454 */;

let module_4731 = module_4731_mod;
if (!module_4731) {
  const obj = { default: module_4731 };
  let tmp3 = obj;
} else {
  tmp3 = module_4731;
}
module_4731 = tmp3;
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
let module_4454 = module_4454_mod;
if (!module_4454) {
  const obj4 = { default: module_4454 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4454;
}
module_4454 = tmp9;

export default function setWeek(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_4731.default(defaultResult1, arg2) - module_4454.default(arg1);
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;