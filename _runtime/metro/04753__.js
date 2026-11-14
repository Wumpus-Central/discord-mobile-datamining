// === Module 4753: ? ===

// Module 4753
import module_4589_mod from "module_4589" /* 4589 */;
import module_4733_mod from "module_4733" /* 4733 */;
import requiredArgs_mod from "requiredArgs" /* 4586 */;

let module_4589 = module_4589_mod;
if (!module_4589) {
  const obj = { default: module_4589 };
  let tmp3 = obj;
} else {
  tmp3 = module_4589;
}
module_4589 = tmp3;
let module_4733 = module_4733_mod;
if (!module_4733) {
  const obj2 = { default: module_4733 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4733;
}
module_4733 = tmp5;
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
  return module_4733.default(arg0, 7 * module_4589.default(arg1));
};
export default exports.default;