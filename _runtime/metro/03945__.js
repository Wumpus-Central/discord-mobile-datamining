// === Module 3945: ? ===

// Module 3945
import module_3941 from "module_3941" /* 3941 */;
import requiredArgs from "requiredArgs" /* 3694 */;

if (!module_3941) {
  let obj = { default: module_3941 };
  let tmp3 = obj;
} else {
  tmp3 = module_3941;
}
module_3941 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function formatDistanceToNow(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return module_3941.default(arg0, Date.now(), arg1);
};
export default exports.default;