// === Module 4211: ? ===

// Module 4211
import module_3993_mod from "module_3993" /* 3993 */;
import module_4026_mod from "module_4026" /* 4026 */;
import requiredArgs_mod from "requiredArgs" /* 3846 */;

let module_3993 = module_3993_mod;
if (!module_3993) {
  const obj = { default: module_3993 };
  let tmp3 = obj;
} else {
  tmp3 = module_3993;
}
module_3993 = tmp3;
let module_4026 = module_4026_mod;
if (!module_4026) {
  const obj2 = { default: module_4026 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4026;
}
module_4026 = tmp5;
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
  return module_4026.default(arg0, module_3993.default(Date.now(), 1));
};
export default exports.default;