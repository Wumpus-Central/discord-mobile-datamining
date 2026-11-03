// === Module 4855: subBusinessDays ===

// Module 4855 (subBusinessDays)
import module_4571_mod from "module_4571" /* 4571 */;
import requiredArgs_mod from "requiredArgs" /* 4422 */;
import module_4425_mod from "module_4425" /* 4425 */;

let module_4571 = module_4571_mod;
if (!module_4571) {
  const obj = { default: module_4571 };
  let tmp3 = obj;
} else {
  tmp3 = module_4571;
}
module_4571 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_4425 = module_4425_mod;
if (!module_4425) {
  const obj3 = { default: module_4425 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4425;
}
module_4425 = tmp7;

export default function subBusinessDays(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4571.default(arg0, -module_4425.default(arg1));
};
export default exports.default;