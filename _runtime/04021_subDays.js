// === Module 4021: subDays ===

// Module 4021 (subDays)
import module_3798 from "module_3798" /* 3798 */;
import requiredArgs from "requiredArgs" /* 3651 */;
import module_3654 from "module_3654" /* 3654 */;

if (!module_3798) {
  let obj = { default: module_3798 };
  let tmp3 = obj;
} else {
  tmp3 = module_3798;
}
module_3798 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
if (!module_3654) {
  obj = { default: module_3654 };
  let tmp7 = obj;
} else {
  tmp7 = module_3654;
}
module_3654 = tmp7;

export default function subDays(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3798.default(arg0, -module_3654.default(arg1));
};
export default exports.default;