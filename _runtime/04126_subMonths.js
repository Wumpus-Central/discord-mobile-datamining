// === Module 4126: subMonths ===

// Module 4126 (subMonths)
import module_3697 from "module_3697" /* 3697 */;
import module_3842 from "module_3842" /* 3842 */;
import requiredArgs from "requiredArgs" /* 3694 */;

if (!module_3697) {
  let obj = { default: module_3697 };
  let tmp3 = obj;
} else {
  tmp3 = module_3697;
}
module_3697 = tmp3;
if (!module_3842) {
  obj = { default: module_3842 };
  let tmp5 = obj;
} else {
  tmp5 = module_3842;
}
module_3842 = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subMonths(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3842.default(arg0, -module_3697.default(arg1));
};
export default exports.default;