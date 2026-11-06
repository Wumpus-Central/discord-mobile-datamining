// === Module 4816: ? ===

// Module 4816
import module_4598_mod from "module_4598" /* 4598 */;
import module_4631_mod from "module_4631" /* 4631 */;
import requiredArgs_mod from "requiredArgs" /* 4451 */;

let module_4598 = module_4598_mod;
if (!module_4598) {
  const obj = { default: module_4598 };
  let tmp3 = obj;
} else {
  tmp3 = module_4598;
}
module_4598 = tmp3;
let module_4631 = module_4631_mod;
if (!module_4631) {
  const obj2 = { default: module_4631 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4631;
}
module_4631 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function isTomorrow(arg0) {
  requiredArgs.default(1, arguments);
  return module_4631.default(arg0, module_4598.default(Date.now(), 1));
};
export default exports.default;