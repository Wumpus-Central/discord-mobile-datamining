// === Module 4065: ? ===

// Module 4065
import module_3915_mod from "module_3915" /* 3915 */;
import module_4066_mod from "module_4066" /* 4066 */;
import requiredArgs_mod from "requiredArgs" /* 3912 */;

let module_3915 = module_3915_mod;
if (!module_3915) {
  const obj = { default: module_3915 };
  let tmp3 = obj;
} else {
  tmp3 = module_3915;
}
module_3915 = tmp3;
let module_4066 = module_4066_mod;
if (!module_4066) {
  const obj2 = { default: module_4066 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4066;
}
module_4066 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;
let c3 = 3600000;

export default function addHours(interval, arg1) {
  requiredArgs.default(2, arguments);
  return module_4066.default(interval, module_3915.default(arg1) * c3);
};
export default exports.default;