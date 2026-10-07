// === Module 4323: ? ===

// Module 4323
import module_4315_mod from "module_4315" /* 4315 */;
import requiredArgs_mod from "requiredArgs" /* 3965 */;

let module_4315 = module_4315_mod;
if (!module_4315) {
  const obj = { default: module_4315 };
  let tmp3 = obj;
} else {
  tmp3 = module_4315;
}
module_4315 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisMonth(arg0) {
  requiredArgs.default(1, arguments);
  return module_4315.default(Date.now(), arg0);
};
export default exports.default;