// === Module 4870: ? ===

// Module 4870
import module_4454_mod from "module_4454" /* 4454 */;
import _typeof_mod from "module_4450" /* 4450 */;
import module_4722_mod from "module_4722" /* 4722 */;
import requiredArgs_mod from "requiredArgs" /* 4451 */;

let module_4454 = module_4454_mod;
if (!module_4454) {
  const obj = { default: module_4454 };
  let tmp3 = obj;
} else {
  tmp3 = module_4454;
}
module_4454 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4722 = module_4722_mod;
if (!module_4722) {
  const obj3 = { default: module_4722 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4722;
}
module_4722 = tmp7;
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
  const diff = module_4722.default(defaultResult1) - module_4454.default(arg1);
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;