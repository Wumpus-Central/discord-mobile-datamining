// === Module 4541: ? ===

// Module 4541
import module_4539_mod from "module_4539" /* 4539 */;
import requiredArgs_mod from "requiredArgs" /* 4289 */;

let module_4539 = module_4539_mod;
if (!module_4539) {
  const obj = { default: module_4539 };
  let tmp3 = obj;
} else {
  tmp3 = module_4539;
}
module_4539 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function formatDistanceToNowStrict(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return module_4539.default(arg0, Date.now(), arg1);
};
export default exports.default;