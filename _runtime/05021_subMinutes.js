// === Module 5021: subMinutes ===

// Module 5021 (subMinutes)
import module_4750_mod from "module_4750" /* 4750 */;
import requiredArgs_mod from "requiredArgs" /* 4586 */;
import module_4589_mod from "module_4589" /* 4589 */;

let module_4750 = module_4750_mod;
if (!module_4750) {
  const obj = { default: module_4750 };
  let tmp3 = obj;
} else {
  tmp3 = module_4750;
}
module_4750 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_4589 = module_4589_mod;
if (!module_4589) {
  const obj3 = { default: module_4589 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4589;
}
module_4589 = tmp7;

export default function subMinutes(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4750.default(arg0, -module_4589.default(arg1));
};
export default exports.default;