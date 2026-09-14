// === Module 3881: ? ===

// Module 3881
import module_3729_mod from "module_3729" /* 3729 */;
import module_3882_mod from "module_3882" /* 3882 */;
import module_3885_mod from "module_3885" /* 3885 */;
import requiredArgs_mod from "requiredArgs" /* 3726 */;

let module_3729 = module_3729_mod;
if (!module_3729) {
  const obj = { default: module_3729 };
  let tmp3 = obj;
} else {
  tmp3 = module_3729;
}
module_3729 = tmp3;
let module_3882 = module_3882_mod;
if (!module_3882) {
  const obj2 = { default: module_3882 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3882;
}
module_3882 = tmp5;
let module_3885 = module_3885_mod;
if (!module_3885) {
  const obj3 = { default: module_3885 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3885;
}
module_3885 = tmp7;
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
  return module_3885.default(arg0, module_3882.default(arg0) + module_3729.default(arg1));
};
export default exports.default;