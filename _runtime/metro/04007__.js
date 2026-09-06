// === Module 4007: ? ===

// Module 4007
import module_3997 from "module_3997" /* 3997 */;
import requiredArgs from "requiredArgs" /* 3651 */;

if (!module_3997) {
  let obj = { default: module_3997 };
  let tmp3 = obj;
} else {
  tmp3 = module_3997;
}
module_3997 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisISOWeek(arg0) {
  requiredArgs.default(1, arguments);
  return module_3997.default(arg0, Date.now());
};
export default exports.default;