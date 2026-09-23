// === Module 4349: subSeconds ===

// Module 4349 (subSeconds)
import module_3915_mod from "module_3915" /* 3915 */;
import module_4078_mod from "module_4078" /* 4078 */;
import requiredArgs_mod from "requiredArgs" /* 3912 */;

let module_3915 = module_3915_mod;
if (!module_3915) {
  const obj = { default: module_3915 };
  let tmp3 = obj;
} else {
  tmp3 = module_3915;
}
module_3915 = tmp3;
let module_4078 = module_4078_mod;
if (!module_4078) {
  const obj2 = { default: module_4078 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4078;
}
module_4078 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subSeconds(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4078.default(arg0, -module_3915.default(arg1));
};
export default exports.default;