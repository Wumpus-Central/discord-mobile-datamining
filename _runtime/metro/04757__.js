// === Module 4757: ? ===

// Module 4757
import module_4593_mod from "module_4593" /* 4593 */;
import module_4737_mod from "module_4737" /* 4737 */;
import requiredArgs_mod from "requiredArgs" /* 4590 */;

let module_4593 = module_4593_mod;
if (!module_4593) {
  const obj = { default: module_4593 };
  let tmp3 = obj;
} else {
  tmp3 = module_4593;
}
module_4593 = tmp3;
let module_4737 = module_4737_mod;
if (!module_4737) {
  const obj2 = { default: module_4737 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4737;
}
module_4737 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addWeeks(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4737.default(arg0, 7 * module_4593.default(arg1));
};
export default exports.default;