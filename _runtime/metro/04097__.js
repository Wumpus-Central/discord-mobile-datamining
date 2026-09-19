// === Module 4097: ? ===

// Module 4097
import module_4093_mod from "module_4093" /* 4093 */;
import requiredArgs_mod from "requiredArgs" /* 3846 */;

let module_4093 = module_4093_mod;
if (!module_4093) {
  const obj = { default: module_4093 };
  let tmp3 = obj;
} else {
  tmp3 = module_4093;
}
module_4093 = tmp3;
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
  return module_4093.default(arg0, Date.now(), arg1);
};
export default exports.default;