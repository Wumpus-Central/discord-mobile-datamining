// === Module 4058: ? ===

// Module 4058
import module_3874 from "module_3874" /* 3874 */;
import requiredArgs from "requiredArgs" /* 3694 */;

if (!module_3874) {
  let obj = { default: module_3874 };
  let tmp3 = obj;
} else {
  tmp3 = module_3874;
}
module_3874 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isToday(arg0) {
  requiredArgs.default(1, arguments);
  return module_3874.default(arg0, Date.now());
};
export default exports.default;