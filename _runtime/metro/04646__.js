// === Module 4646: ? ===

// Module 4646
import module_4636_mod from "module_4636" /* 4636 */;
import requiredArgs_mod from "requiredArgs" /* 4290 */;

let module_4636 = module_4636_mod;
if (!module_4636) {
  const obj = { default: module_4636 };
  let tmp3 = obj;
} else {
  tmp3 = module_4636;
}
module_4636 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisISOWeek(arg0) {
  requiredArgs.default(1, arguments);
  return module_4636.default(arg0, Date.now());
};
export default exports.default;