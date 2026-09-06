// === Module 4010: ? ===

// Module 4010
import module_4002 from "module_4002" /* 4002 */;
import requiredArgs from "requiredArgs" /* 3651 */;

if (!module_4002) {
  let obj = { default: module_4002 };
  let tmp3 = obj;
} else {
  tmp3 = module_4002;
}
module_4002 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisQuarter(arg0) {
  requiredArgs.default(1, arguments);
  return module_4002.default(Date.now(), arg0);
};
export default exports.default;