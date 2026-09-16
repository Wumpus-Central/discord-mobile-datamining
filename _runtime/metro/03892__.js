// === Module 3892: ? ===

// Module 3892
import module_3730_mod from "module_3730" /* 3730 */;
import module_3875_mod from "module_3875" /* 3875 */;
import requiredArgs_mod from "requiredArgs" /* 3727 */;

let module_3730 = module_3730_mod;
if (!module_3730) {
  const obj = { default: module_3730 };
  let tmp3 = obj;
} else {
  tmp3 = module_3730;
}
module_3730 = tmp3;
let module_3875 = module_3875_mod;
if (!module_3875) {
  const obj2 = { default: module_3875 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3875;
}
module_3875 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addQuarters(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3875.default(arg0, 3 * module_3730.default(arg1));
};
export default exports.default;