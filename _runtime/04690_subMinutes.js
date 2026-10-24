// === Module 4690: subMinutes ===

// Module 4690 (subMinutes)
import module_4419_mod from "module_4419" /* 4419 */;
import requiredArgs_mod from "requiredArgs" /* 4255 */;
import module_4258_mod from "module_4258" /* 4258 */;

let module_4419 = module_4419_mod;
if (!module_4419) {
  const obj = { default: module_4419 };
  let tmp3 = obj;
} else {
  tmp3 = module_4419;
}
module_4419 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_4258 = module_4258_mod;
if (!module_4258) {
  const obj3 = { default: module_4258 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4258;
}
module_4258 = tmp7;

export default function subMinutes(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4419.default(arg0, -module_4258.default(arg1));
};
export default exports.default;