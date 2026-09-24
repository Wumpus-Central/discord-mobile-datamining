// === Module 4279: ? ===

// Module 4279
import module_4061_mod from "module_4061" /* 4061 */;
import module_4094_mod from "module_4094" /* 4094 */;
import requiredArgs_mod from "requiredArgs" /* 3914 */;

let module_4061 = module_4061_mod;
if (!module_4061) {
  const obj = { default: module_4061 };
  let tmp3 = obj;
} else {
  tmp3 = module_4061;
}
module_4061 = tmp3;
let module_4094 = module_4094_mod;
if (!module_4094) {
  const obj2 = { default: module_4094 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4094;
}
module_4094 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function isTomorrow(arg0) {
  requiredArgs.default(1, arguments);
  return module_4094.default(arg0, module_4061.default(Date.now(), 1));
};
export default exports.default;