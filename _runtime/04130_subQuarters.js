// === Module 4130: subQuarters ===

// Module 4130 (subQuarters)
import module_3697 from "module_3697" /* 3697 */;
import module_3859 from "module_3859" /* 3859 */;
import requiredArgs from "requiredArgs" /* 3694 */;

if (!module_3697) {
  let obj = { default: module_3697 };
  let tmp3 = obj;
} else {
  tmp3 = module_3697;
}
module_3697 = tmp3;
if (!module_3859) {
  obj = { default: module_3859 };
  let tmp5 = obj;
} else {
  tmp5 = module_3859;
}
module_3859 = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subQuarters(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3859.default(arg0, -module_3697.default(arg1));
};
export default exports.default;