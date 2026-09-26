// === Module 4289: subDays ===

// Module 4289 (subDays)
import module_4066_mod from "module_4066" /* 4066 */;
import requiredArgs_mod from "requiredArgs" /* 3919 */;
import module_3922_mod from "module_3922" /* 3922 */;

let module_4066 = module_4066_mod;
if (!module_4066) {
  const obj = { default: module_4066 };
  let tmp3 = obj;
} else {
  tmp3 = module_4066;
}
module_4066 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_3922 = module_3922_mod;
if (!module_3922) {
  const obj3 = { default: module_3922 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3922;
}
module_3922 = tmp7;

export default function subDays(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4066.default(arg0, -module_3922.default(arg1));
};
export default exports.default;