// === Module 4282: subDays ===

// Module 4282 (subDays)
import module_4059_mod from "module_4059" /* 4059 */;
import requiredArgs_mod from "requiredArgs" /* 3912 */;
import module_3915_mod from "module_3915" /* 3915 */;

let module_4059 = module_4059_mod;
if (!module_4059) {
  const obj = { default: module_4059 };
  let tmp3 = obj;
} else {
  tmp3 = module_4059;
}
module_4059 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_3915 = module_3915_mod;
if (!module_3915) {
  const obj3 = { default: module_3915 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3915;
}
module_3915 = tmp7;

export default function subDays(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4059.default(arg0, -module_3915.default(arg1));
};
export default exports.default;