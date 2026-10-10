// === Module 4619: ? ===

// Module 4619
import module_4203_mod from "module_4203" /* 4203 */;
import _typeof_mod from "module_4199" /* 4199 */;
import module_4471_mod from "module_4471" /* 4471 */;
import requiredArgs_mod from "requiredArgs" /* 4200 */;

let module_4203 = module_4203_mod;
if (!module_4203) {
  const obj = { default: module_4203 };
  let tmp3 = obj;
} else {
  tmp3 = module_4203;
}
module_4203 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4471 = module_4471_mod;
if (!module_4471) {
  const obj3 = { default: module_4471 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4471;
}
module_4471 = tmp7;
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
  const diff = module_4471.default(defaultResult1) - module_4203.default(arg1);
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;