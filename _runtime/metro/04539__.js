// === Module 4539: ? ===

// Module 4539
import module_4535_mod from "module_4535" /* 4535 */;
import requiredArgs_mod from "requiredArgs" /* 4288 */;

let module_4535 = module_4535_mod;
if (!module_4535) {
  const obj = { default: module_4535 };
  let tmp3 = obj;
} else {
  tmp3 = module_4535;
}
module_4535 = tmp3;
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
  return module_4535.default(arg0, Date.now(), arg1);
};
export default exports.default;