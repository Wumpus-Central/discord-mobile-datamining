// === Module 4683: subMilliseconds ===

// Module 4683 (subMilliseconds)
import module_4605_mod from "module_4605" /* 4605 */;
import requiredArgs_mod from "requiredArgs" /* 4451 */;
import module_4454_mod from "module_4454" /* 4454 */;

let module_4605 = module_4605_mod;
if (!module_4605) {
  const obj = { default: module_4605 };
  let tmp3 = obj;
} else {
  tmp3 = module_4605;
}
module_4605 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_4454 = module_4454_mod;
if (!module_4454) {
  const obj3 = { default: module_4454 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4454;
}
module_4454 = tmp7;

export default function subMilliseconds(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4605.default(arg0, -module_4454.default(arg1));
};
export default exports.default;