// === Module 4146: subMilliseconds ===

// Module 4146 (subMilliseconds)
import module_4068_mod from "module_4068" /* 4068 */;
import requiredArgs_mod from "requiredArgs" /* 3914 */;
import module_3917_mod from "module_3917" /* 3917 */;

let module_4068 = module_4068_mod;
if (!module_4068) {
  const obj = { default: module_4068 };
  let tmp3 = obj;
} else {
  tmp3 = module_4068;
}
module_4068 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_3917 = module_3917_mod;
if (!module_3917) {
  const obj3 = { default: module_3917 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3917;
}
module_3917 = tmp7;

export default function subMilliseconds(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4068.default(arg0, -module_3917.default(arg1));
};
export default exports.default;