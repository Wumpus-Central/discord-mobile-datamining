// === Module 4690: ? ===

// Module 4690
import module_4526_mod from "module_4526" /* 4526 */;
import module_4670_mod from "module_4670" /* 4670 */;
import requiredArgs_mod from "requiredArgs" /* 4523 */;

let module_4526 = module_4526_mod;
if (!module_4526) {
  const obj = { default: module_4526 };
  let tmp3 = obj;
} else {
  tmp3 = module_4526;
}
module_4526 = tmp3;
let module_4670 = module_4670_mod;
if (!module_4670) {
  const obj2 = { default: module_4670 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4670;
}
module_4670 = tmp5;
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
  return module_4670.default(arg0, 7 * module_4526.default(arg1));
};
export default exports.default;