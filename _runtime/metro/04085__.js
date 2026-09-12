// === Module 4085: ? ===

// Module 4085
import module_4077 from "module_4077" /* 4077 */;
import requiredArgs from "requiredArgs" /* 3726 */;

if (!module_4077) {
  let obj = { default: module_4077 };
  let tmp3 = obj;
} else {
  tmp3 = module_4077;
}
module_4077 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisQuarter(arg0) {
  requiredArgs.default(1, arguments);
  return module_4077.default(Date.now(), arg0);
};
export default exports.default;