// === Module 4592: subMinutes ===

// Module 4592 (subMinutes)
import module_4321_mod from "module_4321" /* 4321 */;
import requiredArgs_mod from "requiredArgs" /* 4157 */;
import module_4160_mod from "module_4160" /* 4160 */;

let module_4321 = module_4321_mod;
if (!module_4321) {
  const obj = { default: module_4321 };
  let tmp3 = obj;
} else {
  tmp3 = module_4321;
}
module_4321 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_4160 = module_4160_mod;
if (!module_4160) {
  const obj3 = { default: module_4160 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4160;
}
module_4160 = tmp7;

export default function subMinutes(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4321.default(arg0, -module_4160.default(arg1));
};
export default exports.default;