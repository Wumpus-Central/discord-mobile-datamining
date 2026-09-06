// === Module 4016: ? ===

// Module 4016
import module_3798 from "module_3798" /* 3798 */;
import module_3831 from "module_3831" /* 3831 */;
import requiredArgs from "requiredArgs" /* 3651 */;

if (!module_3798) {
  let obj = { default: module_3798 };
  let tmp3 = obj;
} else {
  tmp3 = module_3798;
}
module_3798 = tmp3;
if (!module_3831) {
  obj = { default: module_3831 };
  let tmp5 = obj;
} else {
  tmp5 = module_3831;
}
module_3831 = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function isTomorrow(arg0) {
  requiredArgs.default(1, arguments);
  return module_3831.default(arg0, module_3798.default(Date.now(), 1));
};
export default exports.default;