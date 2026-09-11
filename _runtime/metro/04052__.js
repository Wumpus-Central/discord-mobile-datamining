// === Module 4052: ? ===

// Module 4052
import module_4042 from "module_4042" /* 4042 */;
import requiredArgs from "requiredArgs" /* 3696 */;

if (!module_4042) {
  let obj = { default: module_4042 };
  let tmp3 = obj;
} else {
  tmp3 = module_4042;
}
module_4042 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisISOWeek(arg0) {
  requiredArgs.default(1, arguments);
  return module_4042.default(arg0, Date.now());
};
export default exports.default;