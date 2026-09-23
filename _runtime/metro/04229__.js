// === Module 4229: ? ===

// Module 4229
import module_3915_mod from "module_3915" /* 3915 */;
import _typeof_mod from "module_3911" /* 3911 */;
import module_4151_mod from "module_4151" /* 4151 */;
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
let module_4151 = module_4151_mod;
if (!module_4151) {
  const obj3 = { default: module_4151 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4151;
}
module_4151 = tmp7;
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
  const diff = module_4151.default(defaultResult1, arg2) - module_3915.default(arg1);
  defaultResult1.setUTCDate(defaultResult1.getUTCDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;