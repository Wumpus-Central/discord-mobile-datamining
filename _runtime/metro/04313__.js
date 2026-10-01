// === Module 4313: ? ===

// Module 4313
import module_4095_mod from "module_4095" /* 4095 */;
import module_4128_mod from "module_4128" /* 4128 */;
import requiredArgs_mod from "requiredArgs" /* 3948 */;

let module_4095 = module_4095_mod;
if (!module_4095) {
  const obj = { default: module_4095 };
  let tmp3 = obj;
} else {
  tmp3 = module_4095;
}
module_4095 = tmp3;
let module_4128 = module_4128_mod;
if (!module_4128) {
  const obj2 = { default: module_4128 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4128;
}
module_4128 = tmp5;
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
  return module_4128.default(arg0, module_4095.default(Date.now(), 1));
};
export default exports.default;