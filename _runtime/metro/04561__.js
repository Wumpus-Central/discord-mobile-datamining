// === Module 4561: ? ===

// Module 4561
import module_4553_mod from "module_4553" /* 4553 */;
import requiredArgs_mod from "requiredArgs" /* 4202 */;

let module_4553 = module_4553_mod;
if (!module_4553) {
  const obj = { default: module_4553 };
  let tmp3 = obj;
} else {
  tmp3 = module_4553;
}
module_4553 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisQuarter(arg0) {
  requiredArgs.default(1, arguments);
  return module_4553.default(Date.now(), arg0);
};
export default exports.default;