// === Module 4079: ? ===

// Module 4079
import module_3915_mod from "module_3915" /* 3915 */;
import module_4059_mod from "module_4059" /* 4059 */;
import requiredArgs_mod from "requiredArgs" /* 3912 */;

let module_3915 = module_3915_mod;
if (!module_3915) {
  const obj = { default: module_3915 };
  let tmp3 = obj;
} else {
  tmp3 = module_3915;
}
module_3915 = tmp3;
let module_4059 = module_4059_mod;
if (!module_4059) {
  const obj2 = { default: module_4059 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4059;
}
module_4059 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addWeeks(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4059.default(arg0, 7 * module_3915.default(arg1));
};
export default exports.default;