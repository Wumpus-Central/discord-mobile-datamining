// === Module 3860: ? ===

// Module 3860
import module_3697 from "module_3697" /* 3697 */;
import module_3848 from "module_3848" /* 3848 */;
import requiredArgs from "requiredArgs" /* 3694 */;

if (!module_3697) {
  let obj = { default: module_3697 };
  let tmp3 = obj;
} else {
  tmp3 = module_3697;
}
module_3697 = tmp3;
if (!module_3848) {
  obj = { default: module_3848 };
  let tmp5 = obj;
} else {
  tmp5 = module_3848;
}
module_3848 = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addSeconds(interval, arg1) {
  requiredArgs.default(2, arguments);
  return module_3848.default(interval, 1000 * module_3697.default(arg1));
};
export default exports.default;