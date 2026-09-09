// === Module 4020: ? ===

// Module 4020
import module_4010 from "module_4010" /* 4010 */;
import requiredArgs from "requiredArgs" /* 3664 */;

if (!module_4010) {
  let obj = { default: module_4010 };
  let tmp3 = obj;
} else {
  tmp3 = module_4010;
}
module_4010 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisISOWeek(arg0) {
  requiredArgs.default(1, arguments);
  return module_4010.default(arg0, Date.now());
};
export default exports.default;