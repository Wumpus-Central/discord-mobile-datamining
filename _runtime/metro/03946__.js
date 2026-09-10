// === Module 3946: ? ===

// Module 3946
import module_3944 from "module_3944" /* 3944 */;
import requiredArgs from "requiredArgs" /* 3694 */;

if (!module_3944) {
  let obj = { default: module_3944 };
  let tmp3 = obj;
} else {
  tmp3 = module_3944;
}
module_3944 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function formatDistanceToNowStrict(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return module_3944.default(arg0, Date.now(), arg1);
};
export default exports.default;