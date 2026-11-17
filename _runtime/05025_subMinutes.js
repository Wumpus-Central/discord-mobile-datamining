// === Module 5025: subMinutes ===

// Module 5025 (subMinutes)
import module_4754_mod from "module_4754" /* 4754 */;
import requiredArgs_mod from "requiredArgs" /* 4590 */;
import module_4593_mod from "module_4593" /* 4593 */;

let module_4754 = module_4754_mod;
if (!module_4754) {
  const obj = { default: module_4754 };
  let tmp3 = obj;
} else {
  tmp3 = module_4754;
}
module_4754 = tmp3;
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

export default function subMinutes(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4754.default(arg0, -module_4593.default(arg1));
};
export default exports.default;