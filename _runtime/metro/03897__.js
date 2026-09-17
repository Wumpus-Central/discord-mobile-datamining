// === Module 3897: ? ===

// Module 3897
import module_3732_mod from "module_3732" /* 3732 */;
import module_3877_mod from "module_3877" /* 3877 */;
import requiredArgs_mod from "requiredArgs" /* 3729 */;

let module_3732 = module_3732_mod;
if (!module_3732) {
  const obj = { default: module_3732 };
  let tmp3 = obj;
} else {
  tmp3 = module_3732;
}
module_3732 = tmp3;
let module_3877 = module_3877_mod;
if (!module_3877) {
  const obj2 = { default: module_3877 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3877;
}
module_3877 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addYears(interval, arg1) {
  requiredArgs.default(2, arguments);
  return module_3877.default(interval, 12 * module_3732.default(arg1));
};
export default exports.default;