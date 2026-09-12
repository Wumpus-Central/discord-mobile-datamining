// === Module 3977: ? ===

// Module 3977
import module_3973 from "module_3973" /* 3973 */;
import requiredArgs from "requiredArgs" /* 3726 */;

if (!module_3973) {
  let obj = { default: module_3973 };
  let tmp3 = obj;
} else {
  tmp3 = module_3973;
}
module_3973 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function formatDistanceToNow(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return module_3973.default(arg0, Date.now(), arg1);
};
export default exports.default;