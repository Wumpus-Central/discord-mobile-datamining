// === Module 4160: subBusinessDays ===

// Module 4160 (subBusinessDays)
import module_3876_mod from "module_3876" /* 3876 */;
import requiredArgs_mod from "requiredArgs" /* 3727 */;
import module_3730_mod from "module_3730" /* 3730 */;

let module_3876 = module_3876_mod;
if (!module_3876) {
  const obj = { default: module_3876 };
  let tmp3 = obj;
} else {
  tmp3 = module_3876;
}
module_3876 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_3730 = module_3730_mod;
if (!module_3730) {
  const obj3 = { default: module_3730 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3730;
}
module_3730 = tmp7;

export default function subBusinessDays(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3876.default(arg0, -module_3730.default(arg1));
};
export default exports.default;