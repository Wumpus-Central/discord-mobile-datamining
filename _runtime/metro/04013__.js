// === Module 4013: ? ===

// Module 4013
import module_4005 from "module_4005" /* 4005 */;
import requiredArgs from "requiredArgs" /* 3651 */;

if (!module_4005) {
  let obj = { default: module_4005 };
  let tmp3 = obj;
} else {
  tmp3 = module_4005;
}
module_4005 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisYear(arg0) {
  requiredArgs.default(1, arguments);
  return module_4005.default(arg0, Date.now());
};
export default exports.default;