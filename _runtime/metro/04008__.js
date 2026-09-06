// === Module 4008: ? ===

// Module 4008
import module_4000 from "module_4000" /* 4000 */;
import requiredArgs from "requiredArgs" /* 3651 */;

if (!module_4000) {
  let obj = { default: module_4000 };
  let tmp3 = obj;
} else {
  tmp3 = module_4000;
}
module_4000 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisMinute(arg0) {
  requiredArgs.default(1, arguments);
  return module_4000.default(Date.now(), arg0);
};
export default exports.default;