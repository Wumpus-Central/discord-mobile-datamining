// === Module 4019: ? ===

// Module 4019
import module_4008 from "module_4008" /* 4008 */;
import requiredArgs from "requiredArgs" /* 3664 */;

if (!module_4008) {
  let obj = { default: module_4008 };
  let tmp3 = obj;
} else {
  tmp3 = module_4008;
}
module_4008 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisHour(arg0) {
  requiredArgs.default(1, arguments);
  return module_4008.default(Date.now(), arg0);
};
export default exports.default;