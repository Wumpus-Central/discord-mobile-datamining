// === Module 4618: ? ===

// Module 4618
import module_4454_mod from "module_4454" /* 4454 */;
import module_4598_mod from "module_4598" /* 4598 */;
import requiredArgs_mod from "requiredArgs" /* 4451 */;

let module_4454 = module_4454_mod;
if (!module_4454) {
  const obj = { default: module_4454 };
  let tmp3 = obj;
} else {
  tmp3 = module_4454;
}
module_4454 = tmp3;
let module_4598 = module_4598_mod;
if (!module_4598) {
  const obj2 = { default: module_4598 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4598;
}
module_4598 = tmp5;
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
  return module_4598.default(arg0, 7 * module_4454.default(arg1));
};
export default exports.default;