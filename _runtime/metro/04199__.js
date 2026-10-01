// === Module 4199: ? ===

// Module 4199
import module_4195_mod from "module_4195" /* 4195 */;
import requiredArgs_mod from "requiredArgs" /* 3948 */;

let module_4195 = module_4195_mod;
if (!module_4195) {
  const obj = { default: module_4195 };
  let tmp3 = obj;
} else {
  tmp3 = module_4195;
}
module_4195 = tmp3;
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
  return module_4195.default(arg0, Date.now(), arg1);
};
export default exports.default;