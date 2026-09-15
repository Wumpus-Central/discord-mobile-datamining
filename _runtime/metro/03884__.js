// === Module 3884: ? ===

// Module 3884
import module_3732_mod from "module_3732" /* 3732 */;
import module_3885_mod from "module_3885" /* 3885 */;
import module_3888_mod from "module_3888" /* 3888 */;
import requiredArgs_mod from "requiredArgs" /* 3729 */;

let module_3732 = module_3732_mod;
if (!module_3732) {
  const obj = { default: module_3732 };
  let tmp3 = obj;
} else {
  tmp3 = module_3732;
}
module_3732 = tmp3;
let module_3885 = module_3885_mod;
if (!module_3885) {
  const obj2 = { default: module_3885 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3885;
}
module_3885 = tmp5;
let module_3888 = module_3888_mod;
if (!module_3888) {
  const obj3 = { default: module_3888 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3888;
}
module_3888 = tmp7;
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
  return module_3888.default(arg0, module_3885.default(arg0) + module_3732.default(arg1));
};
export default exports.default;