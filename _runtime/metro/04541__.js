// === Module 4541: ? ===

// Module 4541
import module_4537_mod from "module_4537" /* 4537 */;
import requiredArgs_mod from "requiredArgs" /* 4290 */;

let module_4537 = module_4537_mod;
if (!module_4537) {
  const obj = { default: module_4537 };
  let tmp3 = obj;
} else {
  tmp3 = module_4537;
}
module_4537 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function formatDistanceToNow(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return module_4537.default(arg0, Date.now(), arg1);
};
export default exports.default;