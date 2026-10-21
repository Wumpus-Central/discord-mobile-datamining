// === Module 4504: ? ===

// Module 4504
import module_4500_mod from "module_4500" /* 4500 */;
import requiredArgs_mod from "requiredArgs" /* 4253 */;

let module_4500 = module_4500_mod;
if (!module_4500) {
  const obj = { default: module_4500 };
  let tmp3 = obj;
} else {
  tmp3 = module_4500;
}
module_4500 = tmp3;
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
  return module_4500.default(arg0, Date.now(), arg1);
};
export default exports.default;