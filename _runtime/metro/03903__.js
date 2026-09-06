// === Module 3903: ? ===

// Module 3903
import module_3901 from "module_3901" /* 3901 */;
import requiredArgs from "requiredArgs" /* 3651 */;

if (!module_3901) {
  let obj = { default: module_3901 };
  let tmp3 = obj;
} else {
  tmp3 = module_3901;
}
module_3901 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function formatDistanceToNowStrict(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return module_3901.default(arg0, Date.now(), arg1);
};
export default exports.default;