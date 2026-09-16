// === Module 4166: subYears ===

// Module 4166 (subYears)
import module_3730_mod from "module_3730" /* 3730 */;
import module_3895_mod from "module_3895" /* 3895 */;
import requiredArgs_mod from "requiredArgs" /* 3727 */;

let module_3730 = module_3730_mod;
if (!module_3730) {
  const obj = { default: module_3730 };
  let tmp3 = obj;
} else {
  tmp3 = module_3730;
}
module_3730 = tmp3;
let module_3895 = module_3895_mod;
if (!module_3895) {
  const obj2 = { default: module_3895 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3895;
}
module_3895 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3895.default(arg0, -module_3730.default(arg1));
};
export default exports.default;