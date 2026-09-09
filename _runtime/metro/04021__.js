// === Module 4021: ? ===

// Module 4021
import module_4013 from "module_4013" /* 4013 */;
import requiredArgs from "requiredArgs" /* 3664 */;

if (!module_4013) {
  let obj = { default: module_4013 };
  let tmp3 = obj;
} else {
  tmp3 = module_4013;
}
module_4013 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisMinute(arg0) {
  requiredArgs.default(1, arguments);
  return module_4013.default(Date.now(), arg0);
};
export default exports.default;