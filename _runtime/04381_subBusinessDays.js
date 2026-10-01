// === Module 4381: subBusinessDays ===

// Module 4381 (subBusinessDays)
import module_4097_mod from "module_4097" /* 4097 */;
import requiredArgs_mod from "requiredArgs" /* 3948 */;
import module_3951_mod from "module_3951" /* 3951 */;

let module_4097 = module_4097_mod;
if (!module_4097) {
  const obj = { default: module_4097 };
  let tmp3 = obj;
} else {
  tmp3 = module_4097;
}
module_4097 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_3951 = module_3951_mod;
if (!module_3951) {
  const obj3 = { default: module_3951 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3951;
}
module_3951 = tmp7;

export default function subBusinessDays(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4097.default(arg0, -module_3951.default(arg1));
};
export default exports.default;