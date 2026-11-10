// === Module 4675: ? ===

// Module 4675
import module_4673_mod from "module_4673" /* 4673 */;
import requiredArgs_mod from "requiredArgs" /* 4423 */;

let module_4673 = module_4673_mod;
if (!module_4673) {
  const obj = { default: module_4673 };
  let tmp3 = obj;
} else {
  tmp3 = module_4673;
}
module_4673 = tmp3;
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
  return module_4673.default(arg0, Date.now(), arg1);
};
export default exports.default;