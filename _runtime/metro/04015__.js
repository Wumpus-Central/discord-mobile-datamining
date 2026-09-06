// === Module 4015: ? ===

// Module 4015
import module_3831 from "module_3831" /* 3831 */;
import requiredArgs from "requiredArgs" /* 3651 */;

if (!module_3831) {
  let obj = { default: module_3831 };
  let tmp3 = obj;
} else {
  tmp3 = module_3831;
}
module_3831 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isToday(arg0) {
  requiredArgs.default(1, arguments);
  return module_3831.default(arg0, Date.now());
};
export default exports.default;