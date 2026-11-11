// === Module 4884: ? ===

// Module 4884
import module_4870_mod from "module_4870" /* 4870 */;
import requiredArgs_mod from "requiredArgs" /* 4523 */;

let module_4870 = module_4870_mod;
if (!module_4870) {
  const obj = { default: module_4870 };
  let tmp3 = obj;
} else {
  tmp3 = module_4870;
}
module_4870 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisWeek(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return module_4870.default(arg0, Date.now(), arg1);
};
export default exports.default;