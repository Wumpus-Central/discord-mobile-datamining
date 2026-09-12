// === Module 4082: ? ===

// Module 4082
import module_4072 from "module_4072" /* 4072 */;
import requiredArgs from "requiredArgs" /* 3726 */;

if (!module_4072) {
  let obj = { default: module_4072 };
  let tmp3 = obj;
} else {
  tmp3 = module_4072;
}
module_4072 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisISOWeek(arg0) {
  requiredArgs.default(1, arguments);
  return module_4072.default(arg0, Date.now());
};
export default exports.default;