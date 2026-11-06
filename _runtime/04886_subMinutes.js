// === Module 4886: subMinutes ===

// Module 4886 (subMinutes)
import module_4615_mod from "module_4615" /* 4615 */;
import requiredArgs_mod from "requiredArgs" /* 4451 */;
import module_4454_mod from "module_4454" /* 4454 */;

let module_4615 = module_4615_mod;
if (!module_4615) {
  const obj = { default: module_4615 };
  let tmp3 = obj;
} else {
  tmp3 = module_4615;
}
module_4615 = tmp3;
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

export default function subMinutes(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4615.default(arg0, -module_4454.default(arg1));
};
export default exports.default;