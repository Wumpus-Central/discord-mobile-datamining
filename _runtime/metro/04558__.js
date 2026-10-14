// === Module 4558: ? ===

// Module 4558
import module_4548_mod from "module_4548" /* 4548 */;
import requiredArgs_mod from "requiredArgs" /* 4202 */;

let module_4548 = module_4548_mod;
if (!module_4548) {
  const obj = { default: module_4548 };
  let tmp3 = obj;
} else {
  tmp3 = module_4548;
}
module_4548 = tmp3;
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
  return module_4548.default(arg0, Date.now());
};
export default exports.default;