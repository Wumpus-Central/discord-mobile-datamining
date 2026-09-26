// === Module 4083: ? ===

// Module 4083
import module_3922_mod from "module_3922" /* 3922 */;
import module_4073_mod from "module_4073" /* 4073 */;
import requiredArgs_mod from "requiredArgs" /* 3919 */;

let module_3922 = module_3922_mod;
if (!module_3922) {
  const obj = { default: module_3922 };
  let tmp3 = obj;
} else {
  tmp3 = module_3922;
}
module_3922 = tmp3;
let module_4073 = module_4073_mod;
if (!module_4073) {
  const obj2 = { default: module_4073 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4073;
}
module_4073 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;
let c3 = 60000;

export default function addMinutes(interval, arg1) {
  requiredArgs.default(2, arguments);
  return module_4073.default(interval, module_3922.default(arg1) * c3);
};
export default exports.default;