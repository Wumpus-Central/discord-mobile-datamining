// === Module 4649: ? ===

// Module 4649
import module_4641_mod from "module_4641" /* 4641 */;
import requiredArgs_mod from "requiredArgs" /* 4290 */;

let module_4641 = module_4641_mod;
if (!module_4641) {
  const obj = { default: module_4641 };
  let tmp3 = obj;
} else {
  tmp3 = module_4641;
}
module_4641 = tmp3;
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
  return module_4641.default(Date.now(), arg0);
};
export default exports.default;