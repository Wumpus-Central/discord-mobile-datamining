// === Module 4067: ? ===

// Module 4067
import module_3915_mod from "module_3915" /* 3915 */;
import module_4068_mod from "module_4068" /* 4068 */;
import module_4071_mod from "module_4071" /* 4071 */;
import requiredArgs_mod from "requiredArgs" /* 3912 */;

let module_3915 = module_3915_mod;
if (!module_3915) {
  const obj = { default: module_3915 };
  let tmp3 = obj;
} else {
  tmp3 = module_3915;
}
module_3915 = tmp3;
let module_4068 = module_4068_mod;
if (!module_4068) {
  const obj2 = { default: module_4068 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4068;
}
module_4068 = tmp5;
let module_4071 = module_4071_mod;
if (!module_4071) {
  const obj3 = { default: module_4071 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4071;
}
module_4071 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function addISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4071.default(arg0, module_4068.default(arg0) + module_3915.default(arg1));
};
export default exports.default;