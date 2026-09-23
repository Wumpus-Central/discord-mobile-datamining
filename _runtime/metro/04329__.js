// === Module 4329: ? ===

// Module 4329
import module_3915_mod from "module_3915" /* 3915 */;
import _typeof_mod from "module_3911" /* 3911 */;
import requiredArgs_mod from "requiredArgs" /* 3912 */;

let module_3915 = module_3915_mod;
if (!module_3915) {
  const obj = { default: module_3915 };
  let tmp3 = obj;
} else {
  tmp3 = module_3915;
}
module_3915 = tmp3;
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

export default function setHours(module_3915, uTCMinutes) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(module_3915);
  defaultResult1.setHours(module_3915.default(uTCMinutes));
  return defaultResult1;
};
export default exports.default;