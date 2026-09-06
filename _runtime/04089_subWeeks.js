// === Module 4089: subWeeks ===

// Module 4089 (subWeeks)
import module_3654 from "module_3654" /* 3654 */;
import module_3818 from "module_3818" /* 3818 */;
import requiredArgs from "requiredArgs" /* 3651 */;

if (!module_3654) {
  let obj = { default: module_3654 };
  let tmp3 = obj;
} else {
  tmp3 = module_3654;
}
module_3654 = tmp3;
if (!module_3818) {
  obj = { default: module_3818 };
  let tmp5 = obj;
} else {
  tmp5 = module_3818;
}
module_3818 = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subWeeks(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3818.default(arg0, -module_3654.default(arg1));
};
export default exports.default;