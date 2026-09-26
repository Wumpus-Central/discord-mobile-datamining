// === Module 4357: subWeeks ===

// Module 4357 (subWeeks)
import module_3922_mod from "module_3922" /* 3922 */;
import module_4086_mod from "module_4086" /* 4086 */;
import requiredArgs_mod from "requiredArgs" /* 3919 */;

let module_3922 = module_3922_mod;
if (!module_3922) {
  const obj = { default: module_3922 };
  let tmp3 = obj;
} else {
  tmp3 = module_3922;
}
module_3922 = tmp3;
let module_4086 = module_4086_mod;
if (!module_4086) {
  const obj2 = { default: module_4086 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4086;
}
module_4086 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subWeeks(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4086.default(arg0, -module_3922.default(arg1));
};
export default exports.default;