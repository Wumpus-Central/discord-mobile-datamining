// === Module 4321: ? ===

// Module 4321
import module_4311_mod from "module_4311" /* 4311 */;
import requiredArgs_mod from "requiredArgs" /* 3965 */;

let module_4311 = module_4311_mod;
if (!module_4311) {
  const obj = { default: module_4311 };
  let tmp3 = obj;
} else {
  tmp3 = module_4311;
}
module_4311 = tmp3;
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
  return module_4311.default(arg0, Date.now());
};
export default exports.default;