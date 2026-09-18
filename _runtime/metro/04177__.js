// === Module 4177: ? ===

// Module 4177
import module_3959_mod from "module_3959" /* 3959 */;
import module_3992_mod from "module_3992" /* 3992 */;
import requiredArgs_mod from "requiredArgs" /* 3812 */;

let module_3959 = module_3959_mod;
if (!module_3959) {
  const obj = { default: module_3959 };
  let tmp3 = obj;
} else {
  tmp3 = module_3959;
}
module_3959 = tmp3;
let module_3992 = module_3992_mod;
if (!module_3992) {
  const obj2 = { default: module_3992 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3992;
}
module_3992 = tmp5;
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
  return module_3992.default(arg0, module_3959.default(Date.now(), 1));
};
export default exports.default;