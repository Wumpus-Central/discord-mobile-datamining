// === Module 4890: subYears ===

// Module 4890 (subYears)
import module_4454_mod from "module_4454" /* 4454 */;
import module_4619_mod from "module_4619" /* 4619 */;
import requiredArgs_mod from "requiredArgs" /* 4451 */;

let module_4454 = module_4454_mod;
if (!module_4454) {
  const obj = { default: module_4454 };
  let tmp3 = obj;
} else {
  tmp3 = module_4454;
}
module_4454 = tmp3;
let module_4619 = module_4619_mod;
if (!module_4619) {
  const obj2 = { default: module_4619 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4619;
}
module_4619 = tmp5;
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
  return module_4619.default(arg0, -module_4454.default(arg1));
};
export default exports.default;