// === Module 4011: ? ===

// Module 4011
import module_4003 from "module_4003" /* 4003 */;
import requiredArgs from "requiredArgs" /* 3651 */;

if (!module_4003) {
  let obj = { default: module_4003 };
  let tmp3 = obj;
} else {
  tmp3 = module_4003;
}
module_4003 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisSecond(arg0) {
  requiredArgs.default(1, arguments);
  return module_4003.default(Date.now(), arg0);
};
export default exports.default;