// === Module 4348: subHours ===

// Module 4348 (subHours)
import module_4067_mod from "module_4067" /* 4067 */;
import requiredArgs_mod from "requiredArgs" /* 3914 */;
import module_3917_mod from "module_3917" /* 3917 */;

let module_4067 = module_4067_mod;
if (!module_4067) {
  const obj = { default: module_4067 };
  let tmp3 = obj;
} else {
  tmp3 = module_4067;
}
module_4067 = tmp3;
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

export default function subHours(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4067.default(arg0, -module_3917.default(arg1));
};
export default exports.default;