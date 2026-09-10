// === Module 4050: ? ===

// Module 4050
import module_4040 from "module_4040" /* 4040 */;
import requiredArgs from "requiredArgs" /* 3694 */;

if (!module_4040) {
  let obj = { default: module_4040 };
  let tmp3 = obj;
} else {
  tmp3 = module_4040;
}
module_4040 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisISOWeek(arg0) {
  requiredArgs.default(1, arguments);
  return module_4040.default(arg0, Date.now());
};
export default exports.default;