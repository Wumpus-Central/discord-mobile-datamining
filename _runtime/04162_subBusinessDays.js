// === Module 4162: subBusinessDays ===

// Module 4162 (subBusinessDays)
import module_3878_mod from "module_3878" /* 3878 */;
import requiredArgs_mod from "requiredArgs" /* 3729 */;
import module_3732_mod from "module_3732" /* 3732 */;

let module_3878 = module_3878_mod;
if (!module_3878) {
  const obj = { default: module_3878 };
  let tmp3 = obj;
} else {
  tmp3 = module_3878;
}
module_3878 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_3732 = module_3732_mod;
if (!module_3732) {
  const obj3 = { default: module_3732 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3732;
}
module_3732 = tmp7;

export default function subBusinessDays(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3878.default(arg0, -module_3732.default(arg1));
};
export default exports.default;