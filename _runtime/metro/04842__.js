// === Module 4842: ? ===

// Module 4842
import module_4840_mod from "module_4840" /* 4840 */;
import requiredArgs_mod from "requiredArgs" /* 4590 */;

let module_4840 = module_4840_mod;
if (!module_4840) {
  const obj = { default: module_4840 };
  let tmp3 = obj;
} else {
  tmp3 = module_4840;
}
module_4840 = tmp3;
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
  return module_4840.default(arg0, Date.now(), arg1);
};
export default exports.default;