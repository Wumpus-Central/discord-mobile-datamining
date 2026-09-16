// === Module 4088: ? ===

// Module 4088
import module_4074_mod from "module_4074" /* 4074 */;
import requiredArgs_mod from "requiredArgs" /* 3727 */;

let module_4074 = module_4074_mod;
if (!module_4074) {
  const obj = { default: module_4074 };
  let tmp3 = obj;
} else {
  tmp3 = module_4074;
}
module_4074 = tmp3;
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
  return module_4074.default(arg0, Date.now(), arg1);
};
export default exports.default;