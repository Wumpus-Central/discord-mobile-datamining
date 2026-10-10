// === Module 4617: ? ===

// Module 4617
import module_4203_mod from "module_4203" /* 4203 */;
import _typeof_mod from "module_4199" /* 4199 */;
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
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function setHours(module_4203, uTCMinutes) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(module_4203);
  defaultResult1.setHours(module_4203.default(uTCMinutes));
  return defaultResult1;
};
export default exports.default;