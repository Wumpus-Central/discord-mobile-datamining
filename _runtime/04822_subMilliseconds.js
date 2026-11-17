// === Module 4822: subMilliseconds ===

// Module 4822 (subMilliseconds)
import module_4744_mod from "module_4744" /* 4744 */;
import requiredArgs_mod from "requiredArgs" /* 4590 */;
import module_4593_mod from "module_4593" /* 4593 */;

let module_4744 = module_4744_mod;
if (!module_4744) {
  const obj = { default: module_4744 };
  let tmp3 = obj;
} else {
  tmp3 = module_4744;
}
module_4744 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_4593 = module_4593_mod;
if (!module_4593) {
  const obj3 = { default: module_4593 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4593;
}
module_4593 = tmp7;

export default function subMilliseconds(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4744.default(arg0, -module_4593.default(arg1));
};
export default exports.default;