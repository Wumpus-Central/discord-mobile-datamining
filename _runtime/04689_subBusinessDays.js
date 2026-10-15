// === Module 4689: subBusinessDays ===

// Module 4689 (subBusinessDays)
import module_4405_mod from "module_4405" /* 4405 */;
import requiredArgs_mod from "requiredArgs" /* 4256 */;
import module_4259_mod from "module_4259" /* 4259 */;

let module_4405 = module_4405_mod;
if (!module_4405) {
  const obj = { default: module_4405 };
  let tmp3 = obj;
} else {
  tmp3 = module_4405;
}
module_4405 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_4259 = module_4259_mod;
if (!module_4259) {
  const obj3 = { default: module_4259 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4259;
}
module_4259 = tmp7;

export default function subBusinessDays(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4405.default(arg0, -module_4259.default(arg1));
};
export default exports.default;