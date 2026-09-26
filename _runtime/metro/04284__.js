// === Module 4284: ? ===

// Module 4284
import module_4066_mod from "module_4066" /* 4066 */;
import module_4099_mod from "module_4099" /* 4099 */;
import requiredArgs_mod from "requiredArgs" /* 3919 */;

let module_4066 = module_4066_mod;
if (!module_4066) {
  const obj = { default: module_4066 };
  let tmp3 = obj;
} else {
  tmp3 = module_4066;
}
module_4066 = tmp3;
let module_4099 = module_4099_mod;
if (!module_4099) {
  const obj2 = { default: module_4099 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4099;
}
module_4099 = tmp5;
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
  return module_4099.default(arg0, module_4066.default(Date.now(), 1));
};
export default exports.default;