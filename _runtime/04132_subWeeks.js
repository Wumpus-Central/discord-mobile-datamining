// === Module 4132: subWeeks ===

// Module 4132 (subWeeks)
import module_3697 from "module_3697" /* 3697 */;
import module_3861 from "module_3861" /* 3861 */;
import requiredArgs from "requiredArgs" /* 3694 */;

if (!module_3697) {
  let obj = { default: module_3697 };
  let tmp3 = obj;
} else {
  tmp3 = module_3697;
}
module_3697 = tmp3;
if (!module_3861) {
  obj = { default: module_3861 };
  let tmp5 = obj;
} else {
  tmp5 = module_3861;
}
module_3861 = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subWeeks(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3861.default(arg0, -module_3697.default(arg1));
};
export default exports.default;