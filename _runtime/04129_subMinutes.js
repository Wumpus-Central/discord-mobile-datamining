// === Module 4129: subMinutes ===

// Module 4129 (subMinutes)
import module_3858 from "module_3858" /* 3858 */;
import requiredArgs from "requiredArgs" /* 3694 */;
import module_3697 from "module_3697" /* 3697 */;

if (!module_3858) {
  let obj = { default: module_3858 };
  let tmp3 = obj;
} else {
  tmp3 = module_3858;
}
module_3858 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
if (!module_3697) {
  obj = { default: module_3697 };
  let tmp7 = obj;
} else {
  tmp7 = module_3697;
}
module_3697 = tmp7;

export default function subMinutes(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3858.default(arg0, -module_3697.default(arg1));
};
export default exports.default;