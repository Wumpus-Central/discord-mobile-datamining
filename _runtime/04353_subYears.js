// === Module 4353: subYears ===

// Module 4353 (subYears)
import module_3917_mod from "module_3917" /* 3917 */;
import module_4082_mod from "module_4082" /* 4082 */;
import requiredArgs_mod from "requiredArgs" /* 3914 */;

let module_3917 = module_3917_mod;
if (!module_3917) {
  const obj = { default: module_3917 };
  let tmp3 = obj;
} else {
  tmp3 = module_3917;
}
module_3917 = tmp3;
let module_4082 = module_4082_mod;
if (!module_4082) {
  const obj2 = { default: module_4082 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4082;
}
module_4082 = tmp5;
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
  return module_4082.default(arg0, -module_3917.default(arg1));
};
export default exports.default;