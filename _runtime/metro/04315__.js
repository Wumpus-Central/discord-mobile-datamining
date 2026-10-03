// === Module 4315: ? ===

// Module 4315
import module_4305_mod from "module_4305" /* 4305 */;
import requiredArgs_mod from "requiredArgs" /* 3959 */;

let module_4305 = module_4305_mod;
if (!module_4305) {
  const obj = { default: module_4305 };
  let tmp3 = obj;
} else {
  tmp3 = module_4305;
}
module_4305 = tmp3;
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
  return module_4305.default(arg0, Date.now());
};
export default exports.default;