// === Module 4330: ? ===

// Module 4330
import module_3915_mod from "module_3915" /* 3915 */;
import _typeof_mod from "module_3911" /* 3911 */;
import module_4059_mod from "module_4059" /* 4059 */;
import module_4182_mod from "module_4182" /* 4182 */;
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
let module_4059 = module_4059_mod;
if (!module_4059) {
  const obj3 = { default: module_4059 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4059;
}
module_4059 = tmp7;
let module_4182 = module_4182_mod;
if (!module_4182) {
  const obj4 = { default: module_4182 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4182;
}
module_4182 = tmp9;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj5 = { default: requiredArgs };
  let tmp11 = obj5;
} else {
  tmp11 = requiredArgs;
}
requiredArgs = tmp11;

export default function setISODay(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  return module_4059.default(defaultResult1, module_3915.default(arg1) - module_4182.default(defaultResult1));
};
export default exports.default;