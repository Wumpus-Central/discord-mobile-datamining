// === Module 4521: ? ===

// Module 4521
import module_4337_mod from "module_4337" /* 4337 */;
import requiredArgs_mod from "requiredArgs" /* 4157 */;

let module_4337 = module_4337_mod;
if (!module_4337) {
  const obj = { default: module_4337 };
  let tmp3 = obj;
} else {
  tmp3 = module_4337;
}
module_4337 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isToday(arg0) {
  requiredArgs.default(1, arguments);
  return module_4337.default(arg0, Date.now());
};
export default exports.default;