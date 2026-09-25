// === Module 4350: subHours ===

// Module 4350 (subHours)
import module_4069_mod from "module_4069" /* 4069 */;
import requiredArgs_mod from "requiredArgs" /* 3916 */;
import module_3919_mod from "module_3919" /* 3919 */;

let module_4069 = module_4069_mod;
if (!module_4069) {
  const obj = { default: module_4069 };
  let tmp3 = obj;
} else {
  tmp3 = module_4069;
}
module_4069 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_3919 = module_3919_mod;
if (!module_3919) {
  const obj3 = { default: module_3919 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3919;
}
module_3919 = tmp7;

export default function subHours(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4069.default(arg0, -module_3919.default(arg1));
};
export default exports.default;